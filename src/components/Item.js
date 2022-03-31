import React from 'react';
import '../styles/Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return(
        <div className="container">
            <p className="title">{product.title}</p>
            <p className="price">${product.price}</p>
            <img src={product.pictureUrl} alt={product.title}/>
            <Link to={`/detail/${product.id}`}><button>Ver detalle del producto</button></Link>
        </div>
    );
}

export default Item;