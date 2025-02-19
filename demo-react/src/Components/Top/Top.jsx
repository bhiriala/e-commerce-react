import { useEffect, useState } from "react";

function Top(props) {
    const [listProd, setListProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [threeProducts, setThreeProducts] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(props.api);
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du ${props.name}`);
                }
                const data = await response.json();
                setListProd(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [props.api]);

    const listProd3 = listProd.slice(0, 3);
    const displayedProducts = threeProducts ? listProd3 : listProd;
    function handleViewAll() {
        setThreeProducts((prev) => !prev);
    }
    

    return (
        <div className="col-md-4">
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className="single-product-widget">
                    <h2 className="product-wid-title">{props.name}</h2>
                    <button className="wid-view-more" onClick={handleViewAll}>View All</button>

                    {displayedProducts.map((prod, index) => {
                        const i = prod.imageName.indexOf("-");
                        const substring = prod.imageName.slice(0, i);
                        const imgName = `/src/assets/produts-img/${substring}/${prod.imageName}`;

                        return (
                            <div key={index} className="single-wid-product">
                                <a href="single-product.html">
                                    <img src={imgName} alt={prod.name} className="product-thumb" />
                                </a>
                                <h2>
                                    <a href="single-product.html">{prod.name}</a>
                                </h2>
                                <div className="product-wid-rating">
                                    {Array.from({ length: prod.review }).map((_, i) => (
                                        <i key={i} className="fa fa-star" />
                                    ))}
                                </div>
                                <div className="product-wid-price">
                                    <ins>${prod.price - (prod.price * prod.discountRate) / 100}</ins>
                                    <del>${prod.price}</del>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Top;
