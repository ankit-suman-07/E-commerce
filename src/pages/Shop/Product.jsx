import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Rating } from "../../components/Rating";
import "../../css/Product.css";

export const Product = (props) => {
  const { id, productName, price, productImage, owner, rating, tags} = props.data;
  const { addToCart, removeFromCart, cartItems, time, date } = useContext(ShopContext);

  const [btnState, setBtnState] = useState(true);
  const [btnName, setBtnName] = useState("Add To Cart");

  const cartItemCount = cartItems[id] || 0;
  const timeVal = time[id] || 0;
  const dateVal = date[id] || 0;

  useEffect(() => {
    // Check if the product is already in the cart and update the button text accordingly
    if (cartItemCount > 0) {
      setBtnName("Remove Item");
    } else {
      setBtnName("Add to cart");
    }
  }, [cartItemCount]);

  const handleBtnClick = () => {
      setBtnState(!btnState);
      if (btnState) {
        addToCart(id);
      }
      else {
        removeFromCart(id);
      }
      
  }

  const formattedNumber = price.toLocaleString({
    style: "currency",
    currency: "USD",
  });

    

  return (
      <div className="product-card" >
        
        <div className="product-image" >
          <img src={productImage}  className="img" />
        </div>
        
        <div className="product-info">
        <span className="prod-name">{productName}</span>
        <span className="prod-cost"> <span className="currency" >$</span> {formattedNumber}</span>
        <span className="prod-time">
          Order within <b>{timeVal}</b> minutes
        </span>
        <span className="prod-date"> and own it by <b>{dateVal}</b></span>
        {/* <span className="prod-rating"> Rating: {rating}</span> */}
        <Rating  rating={rating} />
        <span className="prod-owner">
          Also owned by <span className="owner" >{owner}</span>
        </span>
          
        <button onClick={() => (handleBtnClick())} className="prod-btn" >
          { btnName }
        </button>
        </div>
          
    </div>
  );
};