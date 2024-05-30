import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { NavBarContext } from "../NavBarContext/NarBarContex"

/* FIRESTORE */
import { db } from '../Firebase/Firebase'
import { collection, addDoc, Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore'
/* COMPONENTS */
import FinishPurchase from "../FinishPurchase/FinishPurchase"

const Checkout = () => {
  const {cart, precioTotal, emptyCart} = useContext(CartContext)
  const {setCartLength} = useContext(NavBarContext)
  const [orderId, setOrderId] = useState(null)

  const [values, setValues] = useState({
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

  const handleName = (e) => {
    if(values.nombre === ''){
      console.log("El campo nombre se encuentra vacio")
      e.preventDefault()
    }
  }

  const handleMail = (e) => {
    if(values.email === ''){
      console.log("El campo mail se encuentra vacio")
      e.preventDefault(e)
    }
  }

  const handleNumber = (e) => {
    if(isNaN(values.numero)){
      console.log("El valor de este campo no es un numero")
      e.preventDefault()
    }else if(values.numero === ''){
      console.log("El campo numero se encuentra vacio")    
      e.preventDefault()   
    }
  }

  const handleValidationForm = (e) => {
    handleName(e)
    handleMail(e)
    handleNumber(e)
    return true
  }

  const handleSubmit = (e) => {
    handleValidationForm(e)
    e.preventDefault(e)

      const ordenCompra = {
        items: cart,
        total: precioTotal(),
        comprador: { ...values },
        fechaYHora: Timestamp.fromDate(new Date())
      }
      
      const ordersRef = collection(db, 'Orders')  /* referencia a collection "orders" */

      /* modificamos la cantidad en la db */  
      cart.forEach((item) => {
        const docRef = doc(db, "Productos", item.id.id) 
        
        getDoc(docRef)
          .then((doc) => {

            updateDoc(docRef, {
              stock: doc.data().stock - item.cantidad
            })
        })
      })
  
      addDoc(ordersRef, ordenCompra)
        .then((doc)=>{
          setOrderId(doc.id)
          emptyCart()
      })
  }

  if(orderId) return <FinishPurchase order={orderId} name={values.nombre}/>

  if(cart.length === 0) return <Navigate to="/" />  /* si el carro esta vacio redirige a la pagina de inicio */

  return (
    <>
    <div className="fondo3">

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center" id="form">
        <h3 id="title-sendOrder">ENVÍA TU ORDEN</h3>
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

        <button className="btn btn-warning my-4" id="btn-send" type="submit" onClick={setCartLength(false)}>ENVIAR</button>
      </form>
    </div>
    </>
  )
}

export default Checkout