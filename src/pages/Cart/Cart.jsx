import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../helper/Products";
import { CartItem } from "./CartItem";
import { Billing } from "../../components/Billing";
import { useNavigate } from "react-router-dom";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import "../../css/Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div>
          <div className="cart">
            {/* <div>
              <h1>Your Cart Items</h1>
            </div> */}
            <div className="cart-products">
              <span className="cart-heading">Items in your Cart</span>
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem data={product} />;
                }
              })}
            </div>
            <div className="cart-bill">
              <Billing amount={totalAmount} />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <ProductionQuantityLimitsIcon  className="empty-icon" />
          <span className="empty-text" >Your cart is Empty.</span>
          <button onClick={() => navigate("/")} className="empty-btn" > Continue Shopping </button>
        </div>
      )}
    </>
  );
};
