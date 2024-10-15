import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/db";


export const CheckOut = () => {

  const { cart, total, clearCart } = useContext(CartContext);

  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      buyer: formCheckout,
      items: cart,
      total,
    };

    console.log(orderData);

    const order = await createOrder(orderData);

    setFormCheckout({ name: "", phone: 0, email: "" });

    clearCart();
    setOrderId(order.id);
  };

  if (orderId) {
    return (
      <>
        <h5>Gracias por tu Compra...</h5>
        <br />
        <h5>Órden de compra generada: {orderId}</h5>
      </>
    )
  } else {

    return (
      <div className="container d-flex justify-content-center m-5">
        <form onSubmit={handleSubmit} className="was-validated">
          <label htmlFor="">Nombre</label>
          <input required type="text" className="form-control" value={formCheckout.name} onChange={handleName} />
          <label htmlFor="">Teléfono</label>
          <input required type="number" className="form-control" value={formCheckout.phone} onChange={handlePhone} />
          <label htmlFor="">Email</label>
          <input required type="email" className="form-control" value={formCheckout.email} onChange={handleEmail} />
          <input type="submit" className="mt-3 btn btn-success" value="Terminar la compra" />
        </form>
      </div>
    );
  }

};
