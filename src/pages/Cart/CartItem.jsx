import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "../../css/CartItem.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage, delDate } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

    const formattedNumber = (price * cartItems[id]).toLocaleString({
      style: "currency",
      currency: "USD",
    });

  return (
    <div className="cart-item">
      <div className="cart-product-image" >
          <img src={productImage}  className="img" />
      </div>
      <div className="cart-description">
          <span className="cart-prod-name">{productName}</span>
          
          <span className="cart-prod-date"> Delivery on : <b>{delDate}</b></span>
        <div className="count-handler">
          <button onClick={() => removeFromCart(id)} className="alter-btn" > - </button>
          <input
            className="count-display"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            disabled="true"
          />
          <button onClick={() => addToCart(id)} className="alter-btn" > + </button>
        </div>
      </div>
      <div className="cart-cost" > 
        <span className="cart-prod-cost"> +$ {formattedNumber }</span>
      </div>
    </div>
  );
};