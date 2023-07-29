import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../helper/Products';

export const ShopContext = createContext(null);

function deliveryDate() {
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
};

const getDefaultCart = () => {
  let cart = {};
  let time = {};
  let date = {};
  const min = 10;
  const max = 59;
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
    
    time[i] = Math.floor(Math.random() * (max - min + 1) + min);
    date[i] = deliveryDate();
  }
  return { cart, time, date };
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart().cart);
const [time, setTime] = useState(getDefaultCart().time);
const [date, setDate] = useState(getDefaultCart().date);


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalCount += cartItems[item];
      }
    }
    return totalCount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    time,
    date,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartCount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};