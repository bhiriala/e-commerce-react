import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInList from "../Components/ProductInList/ProductInList";
import Pagi from "../Components/Pagination/Pagination";
import Title from "../Components/Title/Title";


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
                console.log(result);
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
            <Title name={data ? data.name : "Produit introuvable"}/>
            
            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        {listProd.length > 0 ? (
                            listProd.map((prod, index) => {
                                const i = prod.imageName.indexOf("-");
                                const substring = i !== -1 ? prod.imageName.slice(0, i) : "";
                                const imgName = `/src/assets/produts-img/${substring}/${prod.imageName}`;
                                // console.log(prod.price)
                                // console.log(listProd);

                                return (
                                    <ProductInList 
                                        key={index} 
                                        img={imgName} 
                                        price={prod.price} 
                                        name={prod.name} 
                                        discount={prod.discountRate} 
                                        id={prod.id}
                                    />
                                );
                            })
                        ) : (
                            <p>Aucun produit disponible.</p>
                        )}
                    </div>
                    <div className="row">
                        <Pagi/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
