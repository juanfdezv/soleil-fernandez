import React from 'react';
import ItemCount from './ItemCount.js';

class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return (
            <div style={{ paddingTop: 50}}>
                <ItemCount stock="20" />
            </div>
        );
    }
}

export default ItemListContainer;