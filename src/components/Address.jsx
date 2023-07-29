import React, { useState } from 'react';
import "../css/Address.css";

export const Address = (props) => {
  const [address, setAddress] = useState("");

  const address_1 = "123 Baker Street, London W1U 6TY, United Kingdom";
  const address_2 = "456 Hauptstraße, Berlin 10115, Germany";

  const handleAddressChange = (event) => {
    const selectedAddress = event.target.value;
    setAddress(selectedAddress);
    props.setAddress(selectedAddress); // Call props.setAddress with the selected address
  };

  return (
    <div className='address'>
      <div className="select-address">
        Select Address
      </div>
      <div className="address-list">
        <label className='add-label'>
          <input type="radio" value={address_1} checked={address === address_1} onChange={handleAddressChange} />
          <span className='address-option'>{address_1}</span>
        </label>
        <br />
        <label className='add-label'>
          <input type="radio" value={address_2} checked={address === address_2} onChange={handleAddressChange} />
          <span className='address-option'>{address_2}</span>
        </label>
        <br />
        <button className='add-address'>Add Address</button>
        {/* <div>{address}</div> */}
      </div>
    </div>
  );
}
