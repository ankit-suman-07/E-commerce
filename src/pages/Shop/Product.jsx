import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "../../css/Product.css";

export const Product = (props) => {
  const { id, productName, price, productImage, timeLimit, delDate, owner, rating, tags } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const [btnState, setBtnState] = useState(true);
  const [btnName, setBtnName] = useState("Add To Cart");

  const cartItemCount = cartItems[id] || 0;

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

  
    const min = 10;
    const max = 59;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    const deliveryDate = (() => {
      const currentDate = new Date();
      const dayAfterTomorrow = new Date(currentDate);
      dayAfterTomorrow.setDate(currentDate.getDate() + 2);
    
      const maxDate = new Date(dayAfterTomorrow);
      maxDate.setDate(dayAfterTomorrow.getDate() + 6);
    
      const randomDate = new Date(
        dayAfterTomorrow.getTime() + Math.random() * (maxDate.getTime() - dayAfterTomorrow.getTime())
      );
    
      const day = String(randomDate.getDate()).padStart(2, "0");
      const month = String(randomDate.getMonth() + 1).padStart(2, "0");
      const year = randomDate.getFullYear();
    
      return `${day}/${month}/${year}`;
    })();
    
    

  return (
      <div className="product-card" >
        
        <div className="product-image" >
          <img src={productImage}  className="img" />
        </div>
        
        <div className="product-info">
        <span className="prod-name">{productName}</span>
        <span className="prod-cost"> <span className="currency" >$</span> {formattedNumber}</span>
        <span className="prod-time">
          Order within <b>{randomNumber}</b> minutes
        </span>
        <span className="prod-date"> and get it by <b>{deliveryDate}</b></span>
        <span className="prod-rating"> Rating: {rating}</span>
        <span className="prod-owner">
          Also owned by <b>{owner}</b>
        </span>
          {/* <button className="add-btn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button> */}
        <button onClick={() => (handleBtnClick())} className="prod-btn" >
          { btnName }
        </button>
        </div>
          
    </div>
  );
};