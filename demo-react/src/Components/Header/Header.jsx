import { Link,useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

function Header(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        
        if (searchQuery.trim() !== "") {
            console.log(searchQuery)
          navigate(`/search?q=${searchQuery}`);
          setSearchQuery("");
        }
    };
    return (
        <>
            <div className="site-branding-area" style={{ backgroundColor: "#f8f9fa",paddingRight:"3.5rem",width:"80%",marginLeft:"11rem" }}>
                
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="logo" style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center",marginLeft:"3.5rem"}}>
                            <Link to="/"><img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} /></Link>
                                
                                
                            </div>
                        </div>
                        { location.pathname !== "/cart" && location.pathname !== "/checkout" ?   
                            <form onSubmit={handleSearch} className="col-sm-6" style={{ display: "flex", marginTop: "2.5rem", height: "55px", justifyContent: "center" }}>
                            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" style={{width: "100%",maxWidth: "550px",marginTop: "10px",padding: "10px",borderRadius: "5px",border: "1px solid #ccc"}} placeholder="Search products..." />
                            <button type="submit"  style={{ marginTop: "10px",padding: "10px",backgroundColor: "#5a88ca",color: "#fff",borderRadius: "5px",border: "none",marginLeft: "5px" }}>Search</button>
                            </form> 
                            : <></>}
                        
                            <div className="col-sm-3" style={{marginTop:"0.5rem", justifyContent: "flex-end", alignItems: "center"}}>
                                <div className="shopping-item" style={{ fontSize: "16px" }}>
                                    <Link to="/cart" style={{ textDecoration: "none", color: "#000", display: "flex", alignItems: "center" }}>
                                        Cart : <span className="cart-amunt" style={{ fontWeight: "bold", marginLeft: "5px" }}>{props.total.toFixed(2)} €</span>
                                        <i className="fa fa-shopping-cart" style={{ marginLeft: "10px", fontSize: "20px" }}></i>
                                        <span className="product-count" style={{ marginLeft: "5px", backgroundColor: "#5a88ca", color: "#fff", borderRadius: "50%", padding: "3.5px 1.5px" }}>{props.CartItemsNum}</span>
                                    </Link>
                                </div>
                            </div>
                        
                    </div>
                
            </div>
        </>
    );
}

export default Header;
