import React from "react";
import { PRODUCTS } from "../../helper/Products";
import { Product } from "./Product";
import "../../css/Shop.css";

export const Shop = () => {

  

  return (
    <div className="shop-page">
     
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};