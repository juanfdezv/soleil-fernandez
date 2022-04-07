import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import { CartContext } from '../context/CartContext.js';

const ItemDetail = ({productDetail}) => {
    const {title, price, description, pictureUrl, stock, id} = productDetail;
    const navigate = useNavigate();
    const { addItem, isInCart } = useContext(CartContext);
    const [comprado, setComprado] = useState(false);

    const handleNavigate = () => {
        navigate(-1);
    }

    const [cantidad, setCantidad] = useState(1);

    const addToCart = () => {
        setComprado(true);
        const itemToAdd = {
            id,
            title,
            price,
            cantidad
        }
        addItem(itemToAdd);
    }

    return(
        <div>
            <h3>Detalle</h3>
            <h2>{title} - ${price}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            {
                comprado
                ?   <Link to="/cart"><button style={{marginRight: 10}}>Terminar compra</button></Link>
                :   <ItemCount 
                        stock={stock} 
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={addToCart}    
                    />   
            }
            <button onClick={handleNavigate}>Volver</button>
        </div>
    );
}

export default ItemDetail;