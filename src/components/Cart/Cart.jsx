import React from 'react'
import {CartContext} from "../Context/CartContext"
import {useContext} from "react"
import {Link} from "react-router-dom"
import EmptyCart from "../EmptyCart/EmptyCart"
import {Card} from "react-bootstrap"

const Cart = () => {

  const {cart,
    precioTotal,
    emptyCart,
    removeItems}=useContext(CartContext)

  /* Si el carrito esta vacio se llama al componente de EmptyCart */
  if(cart.length === 0){
    return <EmptyCart />
  }

  return (
    <>
      <div className="fondoCart">
        <div className="d-flex flex-wrap justify-content-center">
        {
          /* mapeo de cada producto que haya en el cart */
          cart.map((prod) => (
            <>
            <Card border="dark" className="cardCarrito">
              <Card.Header><Card.Title><b>{prod.description}</b></Card.Title></Card.Header>
              <Card.Body>
                <Card.Text>Precio: {prod.price * prod.cantidad}ARS</Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Text className="mt-3">Cantidad: {prod.cantidad}</Card.Text>
                  <button onClick={()=> removeItems()} className="trash">🗑️</button>
                </div>
              </Card.Body>
            </Card>
            </>
          ))
        }
        </div>
        <hr className="border border-3 border-white"></hr>
        <div className="d-flex align-items-center flex-column">
            <h3>Precio total de compra: {precioTotal()}ARS</h3>
            <div className="d-flex">
              <button className="btnVaciarCarro mx-1" onClick={emptyCart}>VACIAR CARRO</button>
              <Link to="/checkout"><button className="btnTerminarCompra mx-1">TERMINAR COMPRA</button></Link>
            </div>
          </div>
      </div>
    </>
  )
}

export default Cart


