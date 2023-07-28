import {React, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "../css/Billing.css";

export const Billing = (props) => {
    const { checkout } = useContext(ShopContext);
    const navigate = useNavigate();
 
    const subtotal = (props.amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    const taxes = (props.amount * 0.03).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    const charge = (1000).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    const total = (props.amount + props.amount * 0.03 + 1000).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  return (
    <div className="billing" >
        <div className="bill-total" >
            <div className="bill-subtotal" >
                <span>Subtotal :</span>
                <span> $ { subtotal }</span>
            </div>
            <div className="bill-taxes" >
                <span>Taxes :</span>
                <span> $ { taxes }</span>
            </div>
            
            <div className="bill-membership" >
                <span>Membership Charge :</span>
                <span>$ {charge} </span>
            </div>
            
            <div className="bill-total-amount" >
                <span>Total :</span>
                <span> $ { total }</span>
            </div>
            
        </div>
        <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
    </div>
  )
}
