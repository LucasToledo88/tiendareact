import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://66e84fadb17821a9d9dc37ab.mockapi.io/api/v1/products/`)
      .then(res => res.json())
      .then(res => {
        if (categoryName) {
          setProductos(res.filter(producto => producto.category === categoryName));
        } else {
          setProductos(res);
        }
      });

  }, [categoryName]);

  return (
    <Container>
      <h5>{categoryName ? 'Productos de la categoria: ' + categoryName : 'Todos los productos'}</h5>
      <Row xs={1} md={2} lg={4} className='g-2'>
        <ItemList listado={productos}></ItemList>
      </Row>
    </Container>
  )
}

export default ItemListContainer;
