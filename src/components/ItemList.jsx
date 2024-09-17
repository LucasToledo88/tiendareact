import { Card, Col } from 'react-bootstrap';

function ItemList({ listado = [] }) {

  return (
    <>
      {
        listado.map(producto =>
          <Col key={producto.id}>
            <Card className='shadow-sm'>
              <img src={producto.avatar} className="rounded mx-auto d-block card-img-top p-0 m-0" alt={producto.name}></img>
              <Card.Body>
                <h6>{producto.name}</h6>
                Precio: $ {producto.price}<br />
                <div><a className="btn btn-sm btn-success" href={'/product/' + producto.id}>Ver</a></div>
                <span className='badge text-bg-info float-end'>{producto.category}</span>
              </Card.Body>
            </Card>
          </Col>
        )
      }
    </>
  )
}

export default ItemList;
