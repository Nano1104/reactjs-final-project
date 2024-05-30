import React from 'react'
import {Link} from "react-router-dom"
import { MdRemoveShoppingCart } from "react-icons/md"

const EmptyCart = () => {
  return (
    <>
      <div className="d-flex align-items-center flex-column" id="emptyCart">
          <h2 className="mb-3">Tu carrito se encuentra vacio</h2>
          <MdRemoveShoppingCart id="icon-emptyCart"/>
          <span className="mt-4">¡Agrega Productos!</span>
          <Link to={"/productos"} id="btn-emptyCart">Ver Prodcutos</Link>
      </div>
    </>
  )
}

export default EmptyCart