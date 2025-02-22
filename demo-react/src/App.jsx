import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout.js/Layout";
import './App.css'
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import CheckoutForm from "./Pages/Checkout";
import SearchResult from "./Pages/SearchResult";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products/:id", element: <ProductList/> },
            { path: "/productDetails/:id", element: <ProductDetails/> },
            { path: "/cart", element: <Cart/> },
            { path: "checkout", element: <CheckoutForm /> },
            { path: "search", element: <SearchResult/> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
