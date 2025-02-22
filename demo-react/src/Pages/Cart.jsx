import { useEffect } from "react";
import CartTable from "../Components/CartTable/CartTable";
import CartTotal from "../Components/CartTotal/CartTotal";
import ProductInList from "../Components/ProductInList/ProductInList";
import { useDispatch,useSelector } from "react-redux";

function Cart () {
    const { cartId, cartData } = useSelector((state) => state.cart);

        

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
                        console.log(cartData);
    
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
    //pour eviter le probléme au premier rendu ou le cartData est null pour qu'elle ne pose pas on probléme lorsq'on la passe au CartTotal
    if (!cartData) return <p>Chargement du panier...</p>;

    return (
    <>
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                    <div className="woocommerce">
                        <CartTable cart={cartData}/>
                        <div className="cart-collaterals">
                        <div className="cross-sells">
                            <h2>You may be interested in...</h2>
                            <ul className="products">
                            <li className="product">
                                <ProductInList 
                                    key={5000}
                                    img="/src/assets/produts-img/apple/apple-iphone-5s-ofic.jpg"
                                    price={452} 
                                    name="apple iphone 5s" 
                                    discount={22} 
                                    id={1022} />
                            </li>
                            <li className="product">
                                <ProductInList 
                                    key={6000}
                                    img="/src/assets/produts-img/samsung/samsung-galaxy-a10s.jpg"
                                    price={455} 
                                    name="samsung galaxy a10s" 
                                    discount={17} 
                                    id={2004} />
                            </li>
                            </ul>
                        </div>
                        <CartTotal total={cartData.total} subTotal={cartData.subTotal} tax={cartData.tax} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Cart;