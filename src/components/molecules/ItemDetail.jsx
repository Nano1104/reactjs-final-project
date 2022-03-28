import React from 'react'

const ItemDetail = ({producto}) => {
    const {id, description, stock, title, price, url} = producto;
  return (
    <div className="itemDetail">
        <h5>{description}</h5>
        <small>Stock disponible: {stock}</small>
        <p>PRECIO: {price}ARS</p>
        <img src={url} alt="" className="itemImage"></img>
        <button>AGREGAR AL CARRO</button>
    </div>
  )
}

export default ItemDetail