import logo from "../../assets/img/logo.png";

function Header() {
    return (
        <>
            <div className="site-branding-area" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo" style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h1><img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} /></h1>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{ display: "inline-flex",marginTop:"2.5rem",height:"55px",justifyContent: "center" }}>
                            <input type="text" style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Search products..." />
                            <input type="button" value="Search" style={{ marginTop: "10px", padding: "10px", backgroundColor: "#007bff", color: "#fff", borderRadius: "5px", border: "none" }} />
                        
                        </div>
                        <div className="col-sm-4" style={{marginTop:"0.5rem", justifyContent: "flex-end", alignItems: "center" }}>
                            <div className="shopping-item" style={{ fontSize: "16px" }}>
                                <a href="cart.html" style={{ textDecoration: "none", color: "#000", display: "flex", alignItems: "center" }}>
                                    Cart : <span className="cart-amunt" style={{ fontWeight: "bold", marginLeft: "5px" }}>100.58 €</span>
                                    <i className="fa fa-shopping-cart" style={{ marginLeft: "10px", fontSize: "20px" }}></i>
                                    <span className="product-count" style={{ marginLeft: "5px", backgroundColor: "#dc3545", color: "#fff", borderRadius: "50%", padding: "3.5px 1.5px" }}>5</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
