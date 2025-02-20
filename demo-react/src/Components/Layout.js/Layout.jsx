import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCart, fetchCartData } from "../../Redux/cartSlice";

function Layout() {
    const dispatch = useDispatch();
    const { cartId, cartData, loading, error } = useSelector((state) => state.cart);

    console.log(cartData);
    useEffect(() => {
        if (!cartId) {
            dispatch(createCart());
        } else {
            dispatch(fetchCartData(cartId));
        }
    }, [cartId]);
    // [cartId, dispatch]

    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <Header CartItemsNum={cartData?.items?.length || 0} total={cartData?.total || 0} />
            <Navigation />
            <main style={{ minHeight: "80vh", padding: "20px" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
