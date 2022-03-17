import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-items">3</span>
        </div>
    );
}

export default CartWidget;