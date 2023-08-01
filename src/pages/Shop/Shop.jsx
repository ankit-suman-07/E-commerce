import React, { useState } from "react";
import { PRODUCTS } from "../../helper/Products";
import SearchIcon from '@mui/icons-material/Search';
import { Product } from "./Product";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import SortIcon from '@mui/icons-material/Sort';
import "../../css/Shop.css";

export const Shop = () => {
  const [filter, setFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeButton, setActiveButton] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortArray, setSortedArray] = useState(PRODUCTS);
  const [performSort, setPerformSort] = useState(false);

  const handlePerformSort = () => {
    setPerformSort((prevPerformSort) => !prevPerformSort);
  };

  const sortAscendingAlpha = () => {
    const sortedData = [...PRODUCTS].sort((a, b) => a.productName.localeCompare(b.productName));
    setSortedArray(sortedData);
    setPerformSort(false);
  };

  const sortDescendingAlpha = () => {
    const sortedData = [...PRODUCTS].sort((a, b) => b.productName.localeCompare(a.productName));
    setSortedArray(sortedData);
    setPerformSort(false);
  };

  const sortAscendingNumeric = () => {
    const sortedData = [...PRODUCTS].sort((a, b) => a.price - b.price);
    setSortedArray(sortedData);
    setPerformSort(false);
  };

  const sortDescendingNumeric = () => {
    const sortedData = [...PRODUCTS].sort((a, b) => b.price - a.price);
    setSortedArray(sortedData);
    setPerformSort(false);
  };

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
          <button  className="sort-menu" onClick={handlePerformSort} >
            <SortIcon />
          </button>
          
          <button
            className={activeButton === "all" ? "active-filter" : "all"}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={activeButton === "jet" ? "active-filter" : "jet"}
            onClick={() => handleFilterChange("jet")}
          >
            Jet
          </button>
          <button
            className={activeButton === "island" ? "active-filter" : "island"}
            onClick={() => handleFilterChange("island")}
          >
            Island
          </button>
          <button
            className={activeButton === "yacht" ? "active-filter" : "yacht"}
            onClick={() => handleFilterChange("yacht")}
          >
            Yacht
          </button>
          <button
            className={activeButton === "rare" ? "active-filter" : "rare"}
            onClick={() => handleFilterChange("rare")}
          >
            Rare
          </button>
        </div>
        <div className="search-div">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="search-text"
          />
          <button onClick={handleSearch} className="search-btn">
            <SearchIcon className="search-icon" />
          </button>
          {
            (performSort &&
              <div className="all-sorts" >
              <button onClick={sortAscendingAlpha} className="all-sort-btn" >A - Z </button>
              <button onClick={sortDescendingAlpha} className="all-sort-btn" >Z - A</button>
              <button onClick={sortAscendingNumeric} className="all-sort-btn" >Price  <NorthIcon /> </button>
              <button onClick={sortDescendingNumeric} className="all-sort-btn" >Price  <SouthIcon /> </button>
            </div>
              )
          }
          
        </div>
      </div>
      <div className="products">
        {sortArray.map((product) => {
              const lowerCaseFilter = searchFilter.toLowerCase();
              const lowerCaseName = product.productName.toLowerCase();
              if (product.tags.includes(filter) && lowerCaseName.includes(lowerCaseFilter)) {
                return <Product data={product} />;
              } else {
                return null;
              }
            })
}
      </div>
    </div>
  );
};
