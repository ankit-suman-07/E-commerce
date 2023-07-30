import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "../css/CheckOut.css";

export const CheckOut = (props) => {
  const { checkout, getTotalCartCount } = useContext(ShopContext);
  const totalCount = getTotalCartCount();
  const [currentDateTime, setCurrentDateTime] = useState(null);

  const navigate = useNavigate();

  const handleContinueBtn = () => {
    // checkout();
    navigate("/");
    // setCheckoutBtn(!checkoutBtn);
    window.location.reload();
  };

  useEffect(() => {
    // Set the current date and time only if it's not already set
    if (!currentDateTime) {
      setCurrentDateTime(new Date());
    }
  }, []);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className='checkout-comp'>
      <span className='checkout-salute'>Thank you for shopping with us.</span>
      <span className='checkout-welcome'>Welcome to the Billionaire's Club</span>
      <span className='checkout-title'>Billing Address :</span>
      <span className='checkout-desc'>{props.name}</span>
      <span className='checkout-desc'>{props.streetName}, {props.city}, {props.pinCode}</span>
      <span className='checkout-desc'>{props.state}, {props.country}</span>
      <table>
        <tr>
          <td className='table-right' >No. of Items :</td>
          <td className='table-left' >{totalCount}</td>
        </tr>
        <tr>
          <td className='table-right' >Date :</td>
          <td className='table-left' >{currentDateTime && formatDate(currentDateTime)}</td>
        </tr>
        <tr>
          <td className='table-right' >Time :</td>
          <td className='table-left' >{currentDateTime && formatTime(currentDateTime)}</td>
        </tr>
        <tr>
          <td className='table-right' >Amount :</td>
          <td className='table-left' >$ {props.subtotal}</td>
        </tr>
        <tr>
          <td className='table-right' >Taxes :</td>
          <td className='table-left' >$ {props.taxes}</td>
        </tr>
        <tr>
          <td className='table-right' >Membership :</td>
          <td className='table-left' >$ 1000.00</td>
        </tr>
        <tr className='table-total'>
          <td className='table-right' >Total :</td>
          <td className='table-left' >$ {props.total}</td>
        </tr>
        <tr>
          <td className='table-right' >Paid through :</td>
          <td className='table-left' >{props.selectedPayment}</td>
        </tr>
      </table>

      <button 
        onClick={handleContinueBtn}
        className='continue-btn' 
      >
          Continue Shopping
      </button>
    </div>
  );
}
