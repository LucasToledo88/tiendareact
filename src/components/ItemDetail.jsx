import React from 'react';
import ItemCount from './ItemCount'; // Asegúrate de que la ruta sea correcta

const ItemDetail = () => {
  return (
    <div>
      <h1>Item Detail</h1>
      <ItemCount stock={10} initial={1} onAdd={(count) => console.log(count)} />
    </div>
  );
};

export default ItemDetail;
