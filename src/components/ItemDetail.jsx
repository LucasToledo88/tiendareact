import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemDetail({ detail }) {

  const count = 0; 

  return (
    <Card className='shadow-sm mx-auto' key={detail.id} style={{ maxWidth: '480px' }} >
      <img src={detail.avatar} className="rounded mx-auto d-block card-img-top p-0 m-0 mw-50" alt={detail.name} />
      <Card.Body className='card-body'>
        <h6>{detail.name}</h6>
        <p>{detail.description}</p>
        Precio: $ {detail.price}<br />
        <span className='badge text-bg-success float-end'>{detail.category}</span>
        <ItemCount count={count}></ItemCount>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail;
