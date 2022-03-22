import React from 'react';
import ItemCount from './ItemCount.js';

const ItemListContainer = (props) => {
    return (
        <div style={{ paddingTop: 50}}>
            <ItemCount stock="20" />
        </div>
    );
}

export default ItemListContainer;