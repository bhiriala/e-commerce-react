import { Link } from "react-router-dom";

function Navigation () {
    return(
        <>
            <div className="mainmenu-area" style={{marginLeft:"18.3rem"}}>
                
                    <div className="row">
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-expand">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="samsung">Samsung</Link>
                        </li>
                        <li>
                            <a href="shop.html">Apple</a>
                        </li>
                        <li>
                            <a href="shop.html">LG</a>
                        </li>
                        <li>
                            <a href="shop.html">Sony</a>
                        </li>
                        <li>
                            <a href="shop.html">Huawei</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                
            </div>
        </>
    );
}
export default Navigation;