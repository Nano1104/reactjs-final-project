import React from 'react'
import {Link} from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="d-flex align-items-center flex-column">
        <h2>Tu carrito se encuentra vacio</h2>
        <p>Agrega Productos</p>
        <Link to={"/"} className="btn btn-primary m-1">Ver Prodcutos</Link>
    </div>
  )
}

export default EmptyCart