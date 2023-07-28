import React, { useState } from 'react';
import "../css/Address.css";

export const Address = () => {
    const [address, setAddress] = useState("");
    const [activeButton1, setActiveButton1] = useState(true);
    const [activeButton2, setActiveButton2] = useState(true);

    const address_1 = "123 Baker Street, London W1U 6TY, United Kingdom";
    const address_2 = "456 Hauptstraße, Berlin 10115, Germany";

    const handleAddressClick1 = (selectedAddress) => {
        setAddress(selectedAddress);
        setActiveButton1(!activeButton1);
    };

    const handleAddressClick2 = (selectedAddress) => {
        setAddress(selectedAddress);
        setActiveButton2(!activeButton2);
    };

    return (
        <div className='address'>
            <div className="select-address">
                Select Address
            </div>
            <div className="address-list">
                <button 
                    className={activeButton1 ? "address-option" : "active-btn-1"}
                    onClick={() => handleAddressClick1(address_1)}
                >
                    {address_1}
                </button>

                <button 
                    className={activeButton2 ? "address-option" : "active-btn-2"}
                    onClick={() => handleAddressClick2(address_2)}
                >
                    {address_2}
                </button>
                
                <button className='add-address'>Add Address</button>
                
            </div>
        </div>
    )
}
