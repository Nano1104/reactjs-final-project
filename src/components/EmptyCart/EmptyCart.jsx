import React from 'react'
import {Link} from "react-router-dom"
import {MdRemoveShoppingCart} from "react-icons/md"

const EmptyCart = () => {
  return (
    <>
      <div className="d-flex align-items-center flex-column" id="emptyCard">
          <h2 className="mb-3">Tu carrito se encuentra vacio</h2>
          <MdRemoveShoppingCart style={{fontSize: "6em"}} className="mt-4"/>
          <strong className="mt-4">¡Agrega Productos!</strong>
          <Link to={"/productos"} className="btn btn-success m-2">Ver Prodcutos</Link>
      </div>
    </>
  )
}

export default EmptyCart