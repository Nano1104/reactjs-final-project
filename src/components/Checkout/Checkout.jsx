import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import {useState} from 'react'
import {db} from '../Firebase/Firebase'
import {collection, addDoc, Timestamp, doc, getDoc, updateDoc} from 'firebase/firestore'
import {Navigate, Link} from 'react-router-dom'

import {NavBarContext} from "../NavBarContext/NarBarContex"

import FinishPurchase from "../FinishPurchase/FinishPurchase"

const Checkout = () => {

  const {cart, precioTotal, emptyCart}=useContext(CartContext)
  const {setCartLength}=useContext(NavBarContext)
  const [orderId, setOrderId]=useState(null)

  const handleInputChange = (e) => {
    console.log(e.target.name)
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* creamos la orden */
    const ordenCompra = {
      items: cart,
      total: precioTotal(),
      comprador: {...values},
      fechaYHora: Timestamp.fromDate(new Date())
    }

    console.log(ordenCompra)
    /* referencia a collection "orders" */
    const ordersRef = collection(db, 'Orders')

    cart.forEach((item) =>{
      const docRef = doc(db, "Productos", item.id) /* <----- esta linea de aqui me tirar error */
      
      getDoc(docRef)
        .then((doc)=>{
          updateDoc(docRef, {
            stock: doc.data().stock - item.cantidad
          })
      })
    })

    /* enviamos la orden a la db y cerramos la compra */
    addDoc(ordersRef, ordenCompra)
      .then((doc)=>{
        console.log(doc.id)
        setOrderId(doc.id)
        emptyCart()
      })
  }

  const [values, setValues]=useState({
    nombre: '',
    email: '',
    numero: ''
  })

  if(orderId){
    return <FinishPurchase order={orderId} name={values.nombre}/>
  }

  if(cart.length===0){
    return <Navigate to="/" />
  }

  return (
    <>

    <div className="fondo3">

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center" id="form">
        <h3 style={{marginTop: "100px", color: "orange", fontSize: "2.5em"}}>CONTACTANOS</h3>
        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'text'}
          placeholder="Escribe tu nombre"
          value={values.nombre}
          name='nombre'
          onChange={handleInputChange}
        />
        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'email'}
          placeholder="Escribe tu email"
          value={values.email}
          name='email'
          onChange={handleInputChange}
        />
        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'tel'}
          placeholder="Tu numero de celular"
          value={values.numero}
          name='numero'
          onChange={handleInputChange}
        />
        <button className="btn btn-warning my-4" type="submit" onClick={setCartLength(false)}>ENVIAR</button>
      </form>
    </div>
      
    </>
  )
}

export default Checkout

/* armamos la referencia al prod con su id para modificar el stock */