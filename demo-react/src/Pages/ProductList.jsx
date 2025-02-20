import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInList from "../Components/ProductInList/ProductInList";

function ProductList(props) {
    const [listProd, setListProd] = useState([]);
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/products-lists");
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement des produits`);
                }

                const result = await response.json();

                const foundData = result.find(item => String(item.id) === String(id));

                if (!foundData) {
                    throw new Error("Produit non trouvé !");
                }

                setData(foundData);
                setListProd(foundData.items || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <div className="product-big-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-bit-title text-center">
                                <h2>{data ? data.name : "Produit introuvable"}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        {listProd.length > 0 ? (
                            listProd.map((prod, index) => {
                                const i = prod.imageName.indexOf("-");
                                const substring = i !== -1 ? prod.imageName.slice(0, i) : "";
                                const imgName = `/src/assets/produts-img/${substring}/${prod.imageName}`;

                                return (
                                    <ProductInList 
                                        key={index} 
                                        img={imgName} 
                                        price={prod.price} 
                                        name={prod.name} 
                                        discount={prod.discountRate} 
                                    />
                                );
                            })
                        ) : (
                            <p>Aucun produit disponible.</p>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
