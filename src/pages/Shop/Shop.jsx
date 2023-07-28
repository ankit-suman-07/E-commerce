import React, { useState } from "react";
import { PRODUCTS } from "../../helper/Products";
import { Product } from "./Product";
import "../../css/Shop.css";

export const Shop = () => {
  const [filter, setFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeButton, setActiveButton] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setActiveButton(newFilter);
    };

    const handleSearch = () => {
      setSearchFilter(searchKeyword); // Step 3: Update filter with search keyword
    };


  return (
    <div className="shop-page">
      <div className="filter-search" >
        <div className="sort-btn" >
          <button
            className={activeButton === "all" ? "active-filter" : "all"}
            onClick={() => handleFilterChange("all")}
            >
              All
          </button>
          <button
            className={activeButton === "rare" ? "active-filter" : "rare"}
              onClick={() => handleFilterChange("rare")}
              >
              Rare
          </button>
          <button
            className={activeButton === "island" ? "active-filter" : "island"}
              onClick={() => handleFilterChange("island")}
              >
              island
          </button>
        </div>
        <div className="search-btn">
          <input
            type="text"
            value={searchKeyword} 
            onChange={(e) => setSearchKeyword(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button> 
        </div>
      </div>
      <div className="products">
        {
          PRODUCTS.map((product) => {
            if((product.tags).includes(filter) && (product.productName).includes(searchFilter)) {
                console.log(filter);
                console.log(searchFilter);
                return (
                  <Product data={product} />
                );
            }
          
          })}
      </div>
    </div>
  );
};