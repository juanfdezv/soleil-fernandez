import React from 'react';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/">Soleil</Link>
            <Link to="/category/camperas">Camperas</Link>
            <Link to="/category/camisas">Camisas</Link>
            <Link to="/category/pantalones">Pantalones</Link>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;