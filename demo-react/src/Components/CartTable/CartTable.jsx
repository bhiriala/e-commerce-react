import { Link } from "react-router-dom";
import CartTableItem from "../CartTableItem/CartTableItem";

function CartTable(props) {
    return(
        <>
            <table cellSpacing={0} className="shop_table cart">
                <thead>
                    <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.items.map((item, index) => (
                        <CartTableItem item={item} key={index}/>
                    ))}
                    
                    <tr>
                    <td className="actions" colSpan={6}>
                        <Link to="/checkout">
                            <input
                            type="button"
                            defaultValue="Checkout"
                            name="proceed"
                            className="checkout-button button alt wc-forward"
                            />
                        </Link>
                    </td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default CartTable;