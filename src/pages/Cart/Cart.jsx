import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../helper/Products";
import { CartItem } from "./CartItem";
import { Billing } from "../../components/Billing";
import { useNavigate } from "react-router-dom";
import "../../css/Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      {/* <div>
        <h1>Your Cart Items</h1>
      </div> */}
      <div className="cart-products">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      
      
      {totalAmount > 0 ? (
        <div className="cart-bill" >
          <Billing  amount={totalAmount} />
        </div>
        
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};