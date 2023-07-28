import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../css/Navbar.css";


export const Navbar = () => {

    return (
        <div className="navbar" >
            <div className="nav-logo" >
                <Link to="/" className="link-nav" >Billionnairre's Cart</Link>
            </div>
            <div className="nav-cart" >
                <Link to="/cart" className="link-nav" > 
                    <ShoppingCartIcon style={{ fontSize: "32px" }} className="link-nav"  /> 
                </Link>
            </div>
            <div className="cart-count" >
                3
            </div>
            
        </div>
    );
};