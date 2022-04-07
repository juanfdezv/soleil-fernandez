import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext);

    return (
        <div>
            <h1>Tu compra</h1>
            <hr/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <h4>Subtotal: ${item.price * item.cantidad}</h4>
                        <button
                            onClick={() => removeItem(item.id)}
                        >
                            Eliminar
                        </button>
                        <hr/>
                    </div>
                ))
            }
            <h3>Total: ${cartTotal()}</h3>
            <hr/>
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;