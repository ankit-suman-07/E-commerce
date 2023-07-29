import React, { useState, useContext, createContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { Address } from "./Address";
import { PaymentOption } from "./PaymentOption";
import "../css/Billing.css";




export const Billing = (props) => {
  const { checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState("");

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

  const handleCheckOutClick = () => {
    // checkout();
    navigate("/checkout");
  };


  return (
    <div className="billing">
      <div className="bill-total">
        <div className="bill-subtotal">
          <span>Subtotal :</span>
          <span> $ {subtotal}</span>
        </div>
        <div className="bill-taxes">
          <span>Taxes :</span>
          <span> $ {taxes}</span>
        </div>

        <div className="bill-membership">
          <span>Membership Charge :</span>
          <span>$ {charge} </span>
        </div>

        <div className="bill-total-amount">
          <span>Total :</span>
          <span> $ {total}</span>
        </div>

      </div>

      <div className="bill-address">
        <Address setAddress={setSelectedAddress} /> {/* Pass setAddress function to Address component */}
      </div>

      <div className="bill-payment" >
        <PaymentOption />
      </div>

      <div className="checkout-div">
        <button onClick={handleCheckOutClick}> {/* Use the callback function for onClick */}
          CheckOut
        </button>  
      </div>

      {/* {
        <CheckOut selectedAddress={selectedAddress} taxes= {taxes} total={total} />
      } */}
      

    </div>
  );
};
