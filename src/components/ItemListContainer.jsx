import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';  // Componente de presentación

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular una llamada asíncrona a una API o base de datos
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        const allProducts = [/* Tu lista de productos */];
        resolve(allProducts);
      }, 1000);
    });

    fetchProducts.then((data) => {
      if (categoryId) {
        setProducts(data.filter(product => product.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
