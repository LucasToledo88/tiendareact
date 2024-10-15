import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2";

export const Cart = () => {

  const { cart, clearCart, removeItem, total } = useContext(CartContext)

  const handleDeleteItem = (item) => {
    Swal.fire({
      icon: "question",
      title: `¿Estas seguro que deseas eliminar ${item.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
    }).then(resp => {
      if (resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          icon: "success",
          title: "Producto eliminado"
        })
      }
    });
  }

  return (
    <>

      {/* mapeamos los items en carrito... */}
      {cart.map((item) => (

        <div className="d-flex border p-2 mb-2" key={item.id}>
          <div className="flex-shrink-0">
            <img src={item.thumbnail} className="rounded" height={128} alt={item.name} />
          </div>
          <div className="flex-grow-1 ms-3">
            <p>{item.name} </p>
            <p>{item.quantity} unidades a ${item.price.toFixed(2)} cada uno, subtotal: ${item.subtotal}.</p>
            <button className="btn btn-danger" onClick={() => handleDeleteItem(item)}>
              Eliminar
            </button>
          </div>
        </div>

      ))}

      {/* ---------------------------- */}

      {

        total > 0 ?
          <>

            <h4>Total: ${total}</h4>

            <Link to="/checkout">
              <button className="btn btn-success">Comprar</button>
            </Link>

            <button className="mx-2 btn btn-outline-danger" onClick={clearCart}>
              Vaciar carrito
            </button>

          </>
          :
          // Sin productos...
          <>
            <h2>Tu Carrito está Vacio</h2>
            <Link className="btn btn-outline-success" to="/">Volver al Home</Link>
            <p className="mt-2">¿O qué estás buscando?</p>
            <p>
              <Link className="mx-2 btn btn-outline-secondary"to="/category/Pizza">Pizza</Link>
              <Link className="mx-2 btn btn-outline-info"to="/category/Hamburguesa">Hamburguesa</Link>
              <Link className="mx-2 btn btn-outline-primary"to="/category/Lomito">Lomito</Link>
            </p>
          </>
      }

    </>

  );

}
