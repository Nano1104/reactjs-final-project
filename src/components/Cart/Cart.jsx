import React from 'react'
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../Context/CartContext"
import {useContext} from "react"
import {Link} from "react-router-dom"
import EmptyCart from "../EmptyCart/EmptyCart"

const Cart = () => {

  const {cart, precioTotal, emptyCart, removeItem}=useContext(CartContext)

  /* Si el carrito esta vacio se llama al componente de EmptyCart */
  if(cart.length === 0){
    return <EmptyCart />
  }

  return (
    <>
      <div>
        {
          cart.map((prod) => (
            <>
              <div key={prod.id} className="d-flex align-items-center flex-column">
                  <h3>{prod.description}</h3>
                  <p>Precio: {prod.price * prod.cantidad}</p>
                  <p>Cantidad: <strong>{prod.cantidad}</strong></p>
                  <button onClick={()=> removeItem(prod.id)}>🗑️</button>
              </div>
              <hr/>
            </>
          ))
          }
          <div className="d-flex align-items-center flex-column">
            <h3>PRECIO FINAL: {precioTotal()}</h3>
            <button className="btn btn-danger" onClick={emptyCart}>VACIAR CARRO</button>
            <Link to="/checkout"><button className="btn btn-success m-1">Terminar mi compra</button></Link>
          </div>
      </div>
    </>
  )
}

export default Cart
