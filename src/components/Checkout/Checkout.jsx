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

  const [values, setValues]=useState({
    nombre: '',
    email: '',
    numero: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleName=(e)=>{
    if(values.nombre === ''){
      console.log("El campo nombre se encuentra vacio")
      e.preventDefault()
    }
  }

  const handleMail=(e)=>{
    if(values.email === ''){
      console.log("El campo mail se encuentra vacio")
      e.preventDefault(e)
    }
  }

  const handleNumber=(e)=>{
    if(isNaN(values.numero)){
      console.log("El valor de este campo no es un numero")
      e.preventDefault()
    }else if(values.numero == ''){
      console.log("El campo numero se encuentra vacio")    
      e.preventDefault()   
    }
  }

  const handleValidationForm=(e)=>{
    handleName(e)
    handleMail(e)
    handleNumber(e)
    return true
  }

  const handleSubmit=(e)=>{
    /* queria validar el formulario con esta funcion,
    pero no encontre manera de que si los campos estaban vacios no se mande la orden */
    handleValidationForm(e)
    e.preventDefault(e)

      /* creamos la orden */
      const ordenCompra = {
        items: cart,
        total: precioTotal(),
        comprador: {...values},
        fechaYHora: Timestamp.fromDate(new Date())
      }

      /* referencia a collection "orders" */
      const ordersRef = collection(db, 'Orders')
  
      /* modificamos la cantidad en la db */
      /* cart.forEach((item) =>{
        const docRef = doc(db, "Productos", item.id) 
        ↑↑↑no entiendo porque esta linea me tira error y no me permite setear el stock de db
        
        getDoc(docRef)
          .then((doc)=>{
            updateDoc(docRef, {
              stock: doc.data().stock - item.cantidad
            })
        })
      }) */
  
      /* enviamos la orden a la db y cerramos la compra */
      addDoc(ordersRef, ordenCompra)
        .then((doc)=>{
          setOrderId(doc.id)
          emptyCart()
      })
  }

  if(orderId){
    return <FinishPurchase order={orderId} name={values.nombre}/>
  }

  /* si no hay productos en el carro redirige a la pagina inicio */
  if(cart.length===0){
    return <Navigate to="/" />
  }

  return (
    <>

    <div className="fondo3">

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center" id="form">
        <h3 style={{marginTop: "100px", color: "orange", fontSize: "2.5em"}}>ENVÍA TU ORDEN</h3>
        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'text'}
          placeholder="Escribe tu nombre"
          value={values.nombre}
          name='nombre'
          onChange={handleInputChange}
        />

        {/* <p className="text-white">Lo siento este campo esta vacio</p> */}

        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'email'}
          placeholder="Escribe tu email"
          value={values.email}
          name='email'
          onChange={handleInputChange}
        />

        {/* <p className="text-white">Lo siento este campo esta vacio</p> */}

        <input
          className="form-control"
          style={{marginTop: "50px"}}
          type={'tel'}
          placeholder="Tu numero de celular"
          value={values.numero}
          name='numero'
          onChange={handleInputChange}
        />

        {/* <p className="text-white">Lo siento este campo esta vacio</p> */}

        <button className="btn btn-warning my-4" type="submit" onClick={setCartLength(false)}>ENVIAR</button>
      </form>
    </div>
      
    </>
  )
}

export default Checkout