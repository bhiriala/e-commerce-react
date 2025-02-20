import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import Top from "../Components/Top/Top";
import img1 from "../assets/img/product-thumb-1.jpg";
import img2 from "../assets/img/product-thumb-2.jpg";
import img3 from "../assets/img/product-thumb-3.jpg";

function ProductDetails() {
    const { id } = useParams();
    const [produit, setProduit] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageName, setImageName] = useState("");
    const [quantity, setQuantity] = useState(1); 

    const dispatch = useDispatch();
    const { cartId, cartData } = useSelector((state) => state.cart);

    const handleAddToCart = () => {
        const newItem = {
            id: produit.id,
            name: produit.name,
            imageName: imageName,
            price: produit.price,
            qty: quantity,
            discountRate:produit.discountRate
        };

        dispatch(addToCart(newItem));
    };

    useEffect(() => {
        const updateCart = async () => {
            if (cartId && cartData) {
                try {
                    console.log(cartData)
                    const response = await fetch(`http://localhost:3000/carts/${cartId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(cartData),
                    });

                    if (!response.ok) {
                        throw new Error("Erreur lors de la mise à jour du panier");
                    }

                    const data = await response.json();
                    console.log("Panier mis à jour:", data);
                } catch (error) {
                    console.error("Erreur lors de la mise à jour du panier:", error);
                }
            }
        };

        updateCart();
    }, [cartData, cartId]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du produit.`);
                }

                const result = await response.json();
                console.log(result);
                setProduit(result);

                if (result.imageName) {
                    const i = result.imageName.indexOf("-");
                    const substring = i !== -1 ? result.imageName.slice(0, i) : "";
                    setImageName(`/src/assets/produts-img/${substring}/${result.imageName}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="container">
                <p>Chargement du produit...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <p style={{ color: "red" }}>Erreur : {error}</p>
            </div>
        );
    }

    return (
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Top name="Recently Viewed" api="http://localhost:3000/top-new-products" />
                        <div className="single-sidebar">
                            <h2 className="sidebar-title" style={{ marginTop: "3rem" }}>Others brands</h2>
                            <ul>
                                <li><a href="#">Sony</a></li>
                                <li><a href="#">Samsung</a></li>
                                <li><a href="#">LG</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product-content-right">
                            <div className="product-breadcroumb">
                                <a href="#">Home</a>
                                <a href="#">Category Name</a>
                                <a href="#">Sony Smart TV - 2015</a>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="product-images">
                                        <div className="product-main-img">
                                            <img src={imageName || img1} alt="Product" />
                                        </div>
                                        <div className="product-gallery">
                                            <img src={img1} alt="Gallery 1" />
                                            <img src={img2} alt="Gallery 2" />
                                            <img src={img3} alt="Gallery 3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-inner">
                                        <h2 className="product-name">{produit.name}</h2>
                                        <div className="product-inner-price">
                                            <ins>${(produit.price * (1-(produit.discountRate/100))).toFixed(2)}</ins>
                                            <del>${produit.price}</del>
                                        </div>
                                        <form action="" className="cart" onSubmit={(e) => e.preventDefault()}>
                                            <div className="quantity">
                                                <input
                                                    type="number"
                                                    size={4}
                                                    className="input-text qty text"
                                                    title="Qty"
                                                    value={quantity}
                                                    name="quantity"
                                                    min={1}
                                                    step={1}
                                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                                />
                                            </div>
                                            <button type="button" className="add_to_cart_button" onClick={handleAddToCart}>
                                                Add to cart
                                            </button>
                                        </form>

                                        <div className="product-inner-category">
                                            <h2>Product Description</h2>
                                            <p>{produit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
