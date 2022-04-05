import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount.js';

const ItemDetail = ({productDetail}) => {
    const {title, price, description, pictureUrl, stock, id} = productDetail;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

    const [cantidad, setCantidad] = useState(1);

    const addToCart = () => {
        const itemToAdd = {
            id,
            title,
            price,
            cantidad
        }

        console.log(itemToAdd);
    }

    return(
        <div>
            <h3>Detalle</h3>
            <h2>{title} - ${price}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>

            <ItemCount 
                stock={stock} 
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={addToCart}    
            />

            <button onClick={handleNavigate}>Volver</button>
        </div>
    );
}

export default ItemDetail;