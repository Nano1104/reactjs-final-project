import React from 'react'
import {Link} from 'react-router-dom'
import { BiErrorCircle } from 'react-icons/bi'

const ErrorComponente = () => {
  return (
    <div className="d-flex justify-content-center align-items-center"
         style={{height: "100vh", width: "100%", backgroundColor: "#555", color: "#ddd", fontSize: "17px"}}>
      <div
        id="cajaError"
        style={{width: "100%", height: "550px", textAlign: "center"}}
      >
      <BiErrorCircle style={{fontSize: "20em"}} className="text-warning"/>
      <h1 style={{fontSize: "3em"}}>Error 404</h1>
      <div className="d-flex flex-column">
         <p>Lo siento ha habido un Error</p>
         <Link to='/'><button className="btn btn-success">VOLVER A INICIO</button></Link>
      </div>
      </div>
    </div>
    
  )
}

export default ErrorComponente