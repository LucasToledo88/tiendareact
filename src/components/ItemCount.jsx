function ItemCount({ count }) {

  return (
    <div className="input-group mt-3 mx-auto shadow-sm" style={{ width: '120px' }}>
      <button className="btn btn-sm btn-danger" type="button" id="btnDecrementar"> - </button>
      <input type="text" className="form-control form-control-sm text-center" placeholder="" value={count} />
      <button className="btn btn-sm btn-success" type="button" id="btnIncrementar"> + </button>
    </div>
  )
}

export default ItemCount;
