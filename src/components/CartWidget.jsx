import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext)

  return (
    <div className="btn btn-sm btn-success">
      <Link to="/cart" className="cart">
        <img src="/img/cart.svg" alt="" height={30} />
        <span className="badge text-bg-success">
          {
            totalItems
          }
        </span>
      </Link>
    </div>
  );

}
