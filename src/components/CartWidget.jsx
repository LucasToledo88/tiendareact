import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext)

  return (
    <div className="btn btn-sm btn-success">
      <a href={'/cart'}>
        <img src="/logo.svg" alt="" height={30} />
        <span className="badge text-bg-success">
          {
            totalItems
          }
        </span>
      </a>
    </div>
  );

}
