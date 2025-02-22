import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const { cartData } = useSelector((state) => state.cart);
  console.log(cartData);

  return (
    <div id="order_review">
      <h3>Your Order</h3>
      <table className="shop_table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartData.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name} × {item.qty}</td>
              <td>€{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Cart Subtotal</th>
            <td>€{cartData.subTotal.toFixed(2)}</td>
          </tr>
          <tr>
          <th>Tax ({cartData.tax}%)</th>
            <td>€{(cartData.total + cartData.total * (cartData.tax / 100)).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Order Total</th>
            <td><strong>€{cartData.total.toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
