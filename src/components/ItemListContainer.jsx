import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { getProducts, getProductsByCategory } from '../firebase/db';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    categoryName ? getProductsByCategory(categoryName, setProducts, setLoading) : getProducts(setProducts, setLoading);
  }, [categoryName]);

  if (loading) {
    return (
      <div>
        <h5 className='text-info'>
          <span className="spinner-border" role="status"></span>
          Cargando Productos...
        </h5>
      </div>
    )
  } else {
    return (
      <div className="container">
        <h5>{categoryName ? 'Productos de la categoria: ' + categoryName : 'Todos los products'}</h5>
        <div className="row">
          <ItemList listado={products}></ItemList>

        </div>
      </div>
    )

  }

}
