import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout.js/Layout";
import './App.css'
import ProductList from "./Pages/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/samsung", element: <ProductList/> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
