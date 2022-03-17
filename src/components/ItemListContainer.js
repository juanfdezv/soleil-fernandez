import React from 'react';

class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return <div style={{ paddingTop: 50}}>{this.props.greeting}</div>
    }
}

export default ItemListContainer;