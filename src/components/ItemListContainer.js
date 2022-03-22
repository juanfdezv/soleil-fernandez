import React from 'react';
import ItemCount from './ItemCount.js';

const ItemListContainer = (props) => {
    return (
        <div style={{ paddingTop: 50}}>
            <ItemCount stock="13" initial="1" />
        </div>
    );
}

export default ItemListContainer;