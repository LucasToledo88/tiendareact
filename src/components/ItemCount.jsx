import React, { useState } from 'react';

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="input-group mt-3 mx-auto shadow-sm" style={{ width: '80px!important' }}>
        <button onClick={handleSubtract} className="btn btn-sm btn-danger">-</button>
        <span className="form-control form-control-sm text-center">{count}</span>
        <button onClick={handleAdd} className="btn btn-sm btn-success">+</button>
        <button onClick={handleAddToCart} className="btn btn-sm btn-primary">Add to Cart</button>
      </div>
    </>
  )
}
