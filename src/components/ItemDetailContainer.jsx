import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';  // Componente de presentación

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const productList = [/* Lista de productos */];
        const foundProduct = productList.find(item => item.id === parseInt(itemId));
        resolve(foundProduct);
      }, 1000);
    });

    fetchProduct.then((data) => setProduct(data));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
