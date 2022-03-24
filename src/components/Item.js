import React from 'react';
import '../styles/Item.css';

const Item = ({product}) => {
    return(
        <div className="container">
            <p className="title">{product.title}</p>
            <p className="price">{product.price}</p>
            <img src={product.pictureUrl} alt=""/>
            <button>Ver detalle del producto</button>
        </div>
    );
}

export default Item;