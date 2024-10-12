import { useState } from 'react';


export const ItemCount = ({ stock, initial = 1, onAdd }) => {

  const [count, setCount] = useState(initial);

  const btnIncrementar = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const btnDecrementar = () => {
    if (count === 1) return setCount(1);
    setCount(count - 1);
  };

  return (
    <>
      <div className="input-group mt-3 mx-auto shadow-sm" >
        <button onClick={btnDecrementar} className="btn btn-sm btn-danger"> - </button>
        <div type="text" className="form-control form-control-sm text-center" placeholder="" value={count}></div>
        <button onClick={btnIncrementar} className="btn btn-sm btn-success"> + </button>
        <button onClick={onAdd(count)} className="btn btn-sm btn-primary"> Agregar al Carrito </button>
      </div>
    </>
  )
}
