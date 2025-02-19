import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";


function Layout() {
    return (
        <div>
            <Header />
            <Navigation/>
            <main style={{ minHeight: "80vh", padding: "20px" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
