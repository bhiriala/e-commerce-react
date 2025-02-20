import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";

function ProductInList(props) {
    const dispatch = useDispatch();
    const { cartId, cartData } = useSelector((state) => state.cart);

    const handleAddToCart = () => {
        const newItem = {
            id: props.id,
            name: props.name,
            imageName: props.img,
            price: props.price,
            qty: 1,
        };

        dispatch(addToCart(newItem));
    };
// jai pas la mise à jour du serveur dans handleAddToCart car la mise à 
// jour du serveur s'execute directement avant que dispatch add to cart
//  ne compléte son execution su coup la mise à jour du serveur se fais avec 
// la meme cart et pas la nouvelle cart et c pour ca j'ai utilisé useEffect qui va mettre 
//à jour le serveur chaque fois que la cart change 
    useEffect(() => {
        const updateCart = async () => {
            if (cartId && cartData) {
                try {
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

    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper">
                    <img src={props.img} alt={props.name} />
                </div>
                <h2>
                    <Link to={`/productDetails/${props.id}`}>{props.name}</Link>

                </h2>
                <div className="product-carousel-price">
                    <ins>${props.price}</ins> <del>${props.discount}</del>
                </div>
                <div className="product-option-shop">
                    <button className="add_to_cart_button" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInList;
