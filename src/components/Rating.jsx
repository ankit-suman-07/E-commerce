import React from 'react';
import { Star } from './Star';
import "../css/Rating.css";

export const Rating = (props) => {
    const starVal = [0, 0, 0, 0, 0];

    const integerValue = Math.floor(props.rating);
    const decimalPart = props.rating - integerValue;
  
    for (let i = 0; i < integerValue; i++) {
        starVal[i] = 1;
    }
  
    if (integerValue < 5) {
        starVal[integerValue] = decimalPart;
    }

  return (
    <div className='rating'>
      {starVal.map((val, index) => {
        return <Star key={index} part={val} />;
      })}
    </div>
  );
};
