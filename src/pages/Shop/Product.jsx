import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "../../css/Product.css";

export const Product = (props) => {
  const { id, productName, price, productImage, timeLimit, delDate, owner, rating, tags } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
      <div className="product-card" >
        
        <div className="product-image" >
          <img src={productImage}  className="img" />
        </div>
        
        <div className="product-info">
        <span className="prod-name">{productName}</span>
        <span className="prod-cost">$ {price}</span>
        <span className="prod-time">
          Order in <b>{timeLimit}</b> minutes
        </span>
        <span className="prod-date"> and get it by <b>{delDate}</b></span>
        <span className="prod-rating"> Rating: {rating}</span>
        <span className="prod-owner">
          Also owned by <b>{owner}</b>
        </span>
          <button className="add-btn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        </div>
          
    </div>
  );
};