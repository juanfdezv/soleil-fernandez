import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock = 10, cantidad, setCantidad, onAdd}) => {

    const handleIncrease = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    }

    const handleDecrease = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    return(
        <div className="item-count-container">
            <div className="count-container">
                <button onClick={handleDecrease} className="count-button">-</button>
                <span className="count-number">{cantidad}</span>
                <button onClick={handleIncrease} className="count-button">+</button>
            </div>
            <button onClick={onAdd} className="addToCart-button">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;