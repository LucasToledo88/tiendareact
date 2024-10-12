import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/CartContext";
import { CheckOut } from "./components/Checkout";
import { ErrorContainer } from "./components/ErrorContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

import './styles/main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <main className="container pb-2">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="*" element={<ErrorContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  </CartContextProvider>
);
