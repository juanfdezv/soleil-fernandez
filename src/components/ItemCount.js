import React, {useState} from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(10);

    const increaseCount = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    }

    const decreaseCount = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        console.log(counter);
    }

    return(
        <div className="item-count-container">
            <p className="item-title">Camisa</p>
            <div className="count-container">
                <button onClick={decreaseCount} className="count-button">-</button>
                <span className="count-number">{counter}</span>
                <button onClick={increaseCount} className="count-button">+</button>
            </div>
            <button onClick={onAdd} className="addToCart-button">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;