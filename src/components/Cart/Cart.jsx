import {useState, useContext, useEffect} from "react"
import {CartContext} from "../Context/CartContext"
import {Link} from "react-router-dom"
import EmptyCart from "../EmptyCart/EmptyCart"
import {Card} from "react-bootstrap"


const Cart = () => {

  const {cart,
    precioTotal,
    emptyCart,
    removeItem}=useContext(CartContext)

    
    /* trare de hacer una funcion que vaya reduciendo la cantidad ingresada
    de los productos pero no tuve suerte */

    /* let contador=0;
    const removeItem=(prod)=>{
      if(prod.cantidad === 1){
        setCart(cart.filter((item)=>item.id !== prod.id))
      }
      const prodCantidad = prod.cantidad -= 1;
      console.log(prodCantidad)
      handleCantidad(prodCantidad)
    }

    const handleCantidad=(cantidad)=>{
      contador += cantidad
      console.log(contador)
      return <p>{contador}</p>
    } */


    /* Si el carrito esta vacio se llama al componente de EmptyCart */
  if(cart.length === 0){
    return <EmptyCart />
  }

  return (
    <>
      <div className="fondoCart">
        {/* creacion de la card de cada producto */}
        <div className="d-flex flex-wrap justify-content-center">
        {
          /* mapeo de cada producto que haya en el cart */
          cart.map((prod) => (
            <>
            <Card border="dark" className="cardCarrito" key={prod.id}>
              <Card.Header><Card.Title><b>{prod.description}</b></Card.Title></Card.Header>
              <Card.Body>
                <Card.Text>Precio: {prod.price * prod.cantidad}ARS</Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Text className="mt-3">Cantidad: {prod.cantidad}</Card.Text>
                  <button onClick={()=> removeItem(prod.id)} className="trash">🗑️</button>
                </div>
              </Card.Body>
            </Card>
            </>
          ))
        }
        </div>

        {/* parte inferior que muestra la finalizacionde de compra */}
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


