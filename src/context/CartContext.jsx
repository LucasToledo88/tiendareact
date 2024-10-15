import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const addItem = (item, quantity) => {

    const cartCopy = [...cart];
    const index = cartCopy.findIndex(product => product.id === item.id)

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subtotal = cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      const newItem = {
        ...item,
        quantity,
        subtotal: item.price * quantity
      }
      setCart([...cart, newItem])
    }
  }

  const removeItem = (id) => {
    const cartFiler = cart.filter(item => item.id !== id);
    setCart(cartFiler)
  }

  const clearCart = () => {
    setCart([])
  }

  const handleTotalItems = () => {
    const newTotal = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalItems(newTotal);
  }

  const handleTotal = () => {
    const newTotal = cart.reduce((acum, item) => acum + item.subtotal, 0);
    setTotal(newTotal);
  }

  useEffect(() => {
    handleTotalItems();
    handleTotal();
  }, [cart]);

  const misExports = {
    cart,
    totalItems,
    total,
    addItem,
    removeItem,
    clearCart,
  }

  return <CartContext.Provider value={misExports}>
    {children}
  </CartContext.Provider>

}
