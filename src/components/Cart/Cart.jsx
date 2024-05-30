import { useContext, useEffect } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import EmptyCart from "../EmptyCart/EmptyCart"
import { Card } from "react-bootstrap"


const Cart = () => {
  const {cart, precioTotal, emptyCart, reduceAmount} = useContext(CartContext)

  if(cart.length === 0) return <EmptyCart />

  return (
    <>
        <div className="d-flex flex-wrap justify-content-center">
        {
          cart.map((prod) => (
            <>
            <Card border="dark" className="cardCarrito" key={prod.id}>
              <Card.Header><Card.Title><b>{prod.description}</b></Card.Title></Card.Header>
              <Card.Body>
                <Card.Text><strong>Precio:</strong> {prod.price * prod.cantidad}ARS</Card.Text>
                <Card.Text className="mt-3"><strong>Cantidad:</strong>  {prod.cantidad}</Card.Text>
                <button onClick={() => reduceAmount(prod)} className="trash">🗑️</button>
              </Card.Body>
            </Card>
            </>
          ))
        }
        </div>

        <hr className="border border-white"></hr>
        <div className="d-flex align-items-center flex-column">
            <h3 className="text-white" id="total-price">Precio total de compra: {precioTotal()}ARS</h3>
            <div className="d-flex">
              <Link to="/checkout" id="btn-terminarCompra">TERMINAR COMPRA</Link>
              <button id="btnVaciarCarro" onClick={emptyCart}>VACIAR CARRO</button>
            </div>
          </div>
    </>
  )
}

export default Cart


