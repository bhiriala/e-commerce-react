import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCart, fetchCartData } from "../../Redux/cartSlice";

function Layout() {
    const dispatch = useDispatch();
    const { cartId, cartData, loading, error } = useSelector((state) => state.cart);
    const location = useLocation();

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
            <Header CartItemsNum={cartData?.items?.reduce((sum, item) => sum + item.qty, 0) || 0} total={cartData?.total || 0} />
           {location.pathname != "/cart" ? <Navigation  /> : <></>}
            <main style={{ minHeight: "80vh", padding: "20px" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
