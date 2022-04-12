import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from '../context/CartContext.js';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-items">{cartQuantity() || ""}</span>
        </Link>
    );
}

export default CartWidget;