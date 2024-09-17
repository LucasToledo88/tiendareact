import React from "react";
import { useEffect, useState } from 'react';
import CartWidget from './CartWidget';

export default function NavBar() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`https://66e84fadb17821a9d9dc37ab.mockapi.io/api/v1/products/`)
      .then(res => res.json())
      .then(res => {
        const result = [...new Set(res.map(item => item.category))];
        setCategorias(result.sort());
      });
  }, []);


  return (
    <div className="navbar navbar-expand-lg border-bottom bg-body-tertiary mb-2">
      <div className="container">
        <a className="navbar-brand" href="/">Agusele ReactJS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navShop" aria-controls="navShop" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navShop">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className='nav-link' href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                {categorias.map(categoria => <li key={categoria}><a className="dropdown-item" href={'/category/' + categoria}>{categoria}</a></li>)}
              </ul>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
