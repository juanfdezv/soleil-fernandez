import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      items: cart,
      total: cartTotal(),
      buyer: { ...values },
      timeAndDate: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (orderId) {
    return (
      <div className="container">
        <h2>¡Finalizaste tu compra"</h2>
        <p>Tu número de orden es: {orderId}</p>
        <Link to="/">
          <button>Volver a la página principal</button>
        </Link>
      </div>
    );
  }

  if (cart.length === 0) return <Navigate to="/" />;

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="name"
          placeholder="Nombre"
          value={values.name}
          onChange={handleInputChange}
          required
        />
        <input
          type={"email"}
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <input
          type={"tel"}
          name="tel"
          placeholder="Teléfono"
          value={values.tel}
          onChange={handleInputChange}
          required
        />
        <hr />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
