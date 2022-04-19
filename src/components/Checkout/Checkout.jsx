import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import {useState} from 'react'
import {db} from '../Firebase/Firebase'
import {collection, addDoc, Timestamp, doc, getDoc, updateDoc} from 'firebase/firestore'
import {Navigate, Link} from 'react-router-dom'

const Checkout = () => {

  const {cart, precioTotal, emptyCart}=useContext(CartContext)
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
    const ordersRef = collection(db, 'Orders')

    cart.forEach((item) => {
        const docRef = doc(db, "Productos", item.id)

        getDoc(docRef)
            .then((doc)=>{
                if(doc.data().stock >= item.cantidad){
                    updateDoc(docRef,{
                      stock: doc.data().stock - item.cantidad
                  }) 
                }else{
                    alert('No hay stock')
                }             
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
    return <div>
      <h2>Tu orden se ha enviado</h2>
      <p>Aqui esta tu numero de compra: {orderId}</p>
      <Link to="/"><button className="btn btn-primary">Volver al Inicio</button></Link>
    </div>
  }

  if(cart.length===0){
    return <Navigate to="/" />
  }

  return (
    <>
      <h2 className="container m-3">Checkout</h2>
      <hr/>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type={'text'}
          placeholder="Escribe tu nombre"
          value={values.nombre}
          name='nombre'
          onChange={handleInputChange}
        />
        <input
          className="form-control my-2"
          type={'email'}
          placeholder="Escribe tu email"
          value={values.email}
          name='email'
          onChange={handleInputChange}
        />
        <input
          className="form-control my-2"
          type={'tel'}
          placeholder="Tu numero de celular"
          value={values.numero}
          name='numero'
          onChange={handleInputChange}
        />
        <button className="btn btn-primary my-2" type="submit">ENVIAR</button>
      </form>
      
    </>
  )
}

export default Checkout