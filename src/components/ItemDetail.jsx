import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, category, thumbnail, price, stock }) => {

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = { id, name, category, thumbnail, price, stock };
    addItem(item, quantity)
    Swal.fire({
      icon: "success",
      title: "Se agrego el producto al carrito"
    });
  }

  return (
    <>
      <div className='card shadow-sm mx-auto' key={id} style={{ maxWidth: '480px' }} >
        <img src={thumbnail} className="rounded mx-auto d-block card-img-top p-0 m-0 mw-50" alt={name} />
        <div className='card-body'>
          <h6>{name}</h6>
          Precio: $ {price}<br />
          <span className='badge text-bg-success float-end'>{category}</span><br />
          <span className='badge text-bg-info float-end'>Stock Disp: {stock}</span>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  )
}
