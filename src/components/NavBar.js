import React from 'react';
import CartWidget from './CartWidget.js';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo" href="#">Soleil</a>
            <a href="#">Camperas</a>
            <a href="#">Camisas</a>
            <a href="#">Pantalones</a>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;