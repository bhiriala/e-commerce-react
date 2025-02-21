import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity, removeItemFromCart } from "../../Redux/cartSlice";

function CartTableItem(props) {
    const dispatch = useDispatch();
    const cartId = useSelector(state => state.cart.cartId);
    const [quantity, setQuantity] = useState(props.item.qty);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        dispatch(updateItemQuantity({ cartId, itemId: props.item.id, qty: newQuantity }));
    };

    const handleDecrease = () => {
        const newQuantity = quantity > 1 ? quantity - 1 : 1;
        setQuantity(newQuantity);
        dispatch(updateItemQuantity({ cartId, itemId: props.item.id, qty: newQuantity }));
    };

    const handleDelete = () => {
        dispatch(removeItemFromCart({ cartId, itemId: props.item.id }));
    };

    return (
        <tr className="cart_item">
            <td className="product-remove">
                <button className="remove" onClick={handleDelete}>×</button>
            </td>
            <td className="product-thumbnail">
                <Link to={`/productDetails/${props.item.id}`}>
                    <img width={145} height={145} alt="poster" className="shop_thumbnail" src={props.item.imageName} />
                </Link>
            </td>
            <td className="product-name">
                <Link to={`/productDetails/${props.item.id}`}>{props.item.name}</Link>
            </td>
            <td className="product-price">
                <span className="amount">{(props.item.price * (1 - props.item.discountRate / 100)).toFixed(2)}€</span>
            </td>
            <td className="product-quantity">
                <div className="quantity buttons_added">
                    <input type="button" className="minus"value="-" onClick={handleDecrease} />
                    <input type="number" size={4} className="input-text qty text" value={quantity} min={1} step={1} readOnly />
                    <input type="button" className="plus" value="+" onClick={handleIncrease} />
                </div>
            </td>
            <td className="product-subtotal">
                <span className="amount">{((props.item.price * (1 - props.item.discountRate / 100)) * quantity).toFixed(2)} €</span>
            </td>
        </tr>
    );
}

export default CartTableItem;
