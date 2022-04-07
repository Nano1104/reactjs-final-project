import React from 'react'
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../Context/CartContext"
import {useContext} from "react"

const Cart = () => {

  const {cart, precioTotal, emptyCart, removeItem}=useContext(CartContext)

  return (
   <>

    <div>
    {
        cart.map((prod) => (
          <>
            <div key={prod.id} className="d-flex align-items-center flex-column">
                <h3>{prod.description}</h3>
                <p>Precio: {prod.price * prod.amount}</p>
                <p>Cantidad: <strong>{prod.amount}</strong></p>
                <button onClick={()=> removeItem(prod.id)}>🗑️</button>
            </div>
            <hr/>
          </>
        ))
      }
      <div className="d-flex align-items-center flex-column">
        <h3>PRECIO FINAL: {precioTotal()}</h3>
        <button className="btn btn-danger" onClick={emptyCart}>VACIAR CARRO</button>
      </div>
    </div>
    
   </>
  )
}

export default Cart
