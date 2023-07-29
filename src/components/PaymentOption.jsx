import React, { useState } from 'react';
import "../css/PaymentOption.css";

export const PaymentOption = () => {
    const [pay, setPay] = useState("");

  const pay_1 = "Credit Card";
  const pay_2 = "Debit Card";
  const pay_3 = "UPI";
  const pay_4 = "Cash";

  const handleAddressChange = (event) => {
    const selectedPay = event.target.value;
    setPay(selectedPay);
  };

  
  return (
    <div className='payment'>
      <div className="select-pay-method">
        Select Payment Method
      </div>
      <div className="payment-list">
        <label className='pay-label'>
          <input type="radio" value={pay_1} checked={pay === pay_1}  onChange={handleAddressChange} />
          <span className='pay-option'>{pay_1}</span>
        </label>
        <label className='pay-label'>
          <input type="radio" value={pay_2} checked={pay === pay_2}  onChange={handleAddressChange} />
          <span className='pay-option'>{pay_2}</span>
        </label>
        <label className='pay-label'>
          <input type="radio" value={pay_3} checked={pay === pay_3}  onChange={handleAddressChange} />
          <span className='pay-option'>{pay_3}</span>
        </label>
        <label className='pay-label'>
          <input type="radio" value={pay_4} checked={pay === pay_4}  onChange={handleAddressChange} />
          <span className='pay-option'>{pay_4}</span>
        </label>
      </div>
    </div>
  )
}
