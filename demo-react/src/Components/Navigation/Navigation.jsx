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
                            <Link to="/products/20">Samsung</Link>
                        </li>
                        <li>
                            <Link to="/products/10">Apple</Link>
                        </li>
                        <li>
                            <Link to="/products/30">LG</Link>
                        </li>
                        <li>
                             <Link to="/products/50">Sony</Link>
                        </li>
                        <li>
                            <Link to="/products/40">Huawei</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                
            </div>
        </>
    );
}
export default Navigation;