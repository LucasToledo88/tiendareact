import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Todos los productos</Link></li>
        <li><Link to="/category/electronica">Electrónica</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
