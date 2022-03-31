import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({productDetail}) => {
    const {title, price, description, pictureUrl} = productDetail;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

    return(
        <div>
            <h3>Detalle</h3>
            <h2>{title} - ${price}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <button onClick={handleNavigate}>Volver</button>
        </div>
    );
}

export default ItemDetail;