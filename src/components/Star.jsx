import React from 'react';
import { Star as StarImage } from '@mui/icons-material';
import "../css/Star.css";

export const Star = (props) => {
    const percentageWidth = (props.part * 200 / 10) + "px";
  return (
    <div className='star' style={{ width: percentageWidth }}>
        <div className='inner-star'  >
            <StarImage  className='star-image' />
        </div>
    </div>
  )
}
