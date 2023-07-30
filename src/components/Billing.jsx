import React, { useState, useContext, createContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { PaymentOption } from "./PaymentOption";
import {CheckOut} from "./CheckOut";
import "../css/Billing.css";




export const Billing = (props) => {
  const { checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [selectedPayment, setSelectedPayment] = useState("");
  const [checkoutBtn, setCheckoutBtn] = useState(false);

  const subtotal = (props.amount).toLocaleString('en-US');
  const taxes = (props.amount * 0.03).toLocaleString('en-US');
  const charge = (1000).toLocaleString('en-US');
  const total = (props.amount + props.amount * 0.03 + 1000).toLocaleString('en-US');

  // const handleCheckOutClick = () => {
  //   // checkout();
  //   // navigate("/checkout");
    
  //   if (name == "" || streetName == "" || city == "" || pinCode == "" || state == "" || country == "" || selectedPayment == "")
  //     setCheckoutBtn(checkoutBtn);
  //   else 
  //     setCheckoutBtn(!checkoutBtn);
  // };

  const handleCheckOutClick = (event) => {
    event.preventDefault(); // Prevent form submission
    if (
      name === "" ||
      streetName === "" ||
      city === "" ||
      pinCode === "" ||
      state === "" ||
      country === "" ||
      selectedPayment === ""
    ) {
      setCheckoutBtn(false); // Set to false if any of the fields are empty
    } else {
      setCheckoutBtn(true); // Set to true if all the fields are filled
    }
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
      <form onSubmit={handleCheckOutClick} >
      <div className="address">
        <div className="enter-address">
          Enter Address
        </div>
        <div className="address-input">
          <div className='add-label'>
            <label className='address-label' >Name:</label>
            <input  className='label-input' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='add-label'>
            <label className='address-label' >Street Name:</label>
            <input  className='label-input' type="text" value={streetName} onChange={(e) => setStreetName(e.target.value)} required />
          </div>
          <div className='add-label'>
            <label className='address-label' >City:</label>
            <input  className='label-input' type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className='add-label'>
            <label className='address-label' >Pin Code:</label>
            <input  className='label-input' type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required />
          </div>
          <div className='add-label'>
            <label className='address-label' >State:</label>
            <input  className='label-input' type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          </div>
          <div className='add-label'>
            <label className='address-label' >Country:</label>
            <input  className='label-input' type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
        
        </div>
      </div>

      <div className="bill-payment" >
        <PaymentOption setPayment={setSelectedPayment} />
      </div>

      <div className="checkout-div">
        <button type="submit" onClick={handleCheckOutClick} className="checkout-button" >
          CheckOut
        </button>  
        
      </div>
      </form>

      

      { checkoutBtn &&
      <div className="checkout-class" >
        <CheckOut 
            selectedPayment={selectedPayment} 
            taxes= {taxes} 
            total={total} 
            name={name}
            streetName={streetName}
            city={city}
            pinCode={pinCode}
            state={state}
            country={country}
            subtotal={subtotal}
            
            
        /> 
      </div>
      }
      

    </div>
  );
};
