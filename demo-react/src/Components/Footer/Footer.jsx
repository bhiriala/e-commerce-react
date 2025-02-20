import './Footer.css';
import { Link } from "react-router-dom";
function Footer() {
  return (
      <div className="footer-top-area">
          <div className="zigzag-bottom" />
          <div className="row">
              <div className="col-md-4 col-sm-6"style={{padding:"2rem"}}>
                  <div className="footer-about-us">
                      <h2><span>MyStore</span></h2>
                      <p>
                          SES Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Perferendis sunt id doloribus vero quam laborum quas alias dolores
                          blanditiis iusto consequatur, modi aliquid eveniet eligendi iure
                          eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam.
                          Laborum commodi veritatis magni at?
                      </p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6" style={{padding:"0.5rem"}}>
                  <div className="footer-menu" style={{textAlign:"center"}}>
                      <h2 className="footer-wid-title">Categories</h2>
                      <ul>
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
              <div className="col-md-4 col-sm-6" style={{padding:"2rem"}}>
                  <div className="footer-newsletter">
                      <h2 className="footer-wid-title">Newsletter</h2>
                      <p>
                          Sign up to our newsletter and get exclusive deals you won't find
                          anywhere else straight to your inbox!
                      </p>
                      <div className="newsletter-form">
                          <form action="#">
                              <input type="email" placeholder="Type your email" />
                              <input type="submit" value="Subscribe" />
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer;
