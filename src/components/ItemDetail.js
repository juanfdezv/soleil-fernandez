import React from 'react';

const ItemDetail = ({productDetail}) => {
    const {title, price, description, pictureUrl} = productDetail;
    return(
        <div>
            <h3>Detalle</h3>
            <h2>{title} - {price}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
        </div>
    );
}

export default ItemDetail;