import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { getProduct } from '../firebase/db';

export const ItemDetailContainer = () => {

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    getProduct(id, setDetail, setLoading, setError);
  }, [id]);

  return (

    <>
      {
        loading
          ?
          <h5 className='text-info'>
            <span className="spinner-border" role="status"></span>
            Cargando Datos del Producto.
          </h5>
          :
          <>
            {error && <h2>Ups, No se encontró el producto.</h2>}
            {detail && <ItemDetail {...detail} />}
          </>
      }

    </>
  )
}
