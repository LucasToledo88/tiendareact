import { Link } from 'react-router-dom'

export const ItemList = ({ listado = [] }) => {

  return (
    <>
      {
        listado.map(producto =>
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3" key={producto.id}>
            <div className='card shadow-sm'>
              <img src={producto.thumbnail} className="rounded mx-auto d-block card-img-top p-0 m-0" alt={producto.name}></img>
              <div className='card-body'>
                <h6>{producto.name}</h6>
                <p>Precio: $ {producto.price}</p>
                <div className='d-flex justify-content-evenly my-2'>
                  <Link to={'/item/' + producto.id} className="btn btn-sm btn-success">Ver Detalles</Link>
                </div>
                <span className='badge text-bg-info float-end'>{producto.category}</span>
                <span className='badge text-bg-secondary mt-1 float-end'>Stock Disponible: {producto.stock}</span>
              </div>
            </div>
          </div>
        )
      }
    </>
  )

}
