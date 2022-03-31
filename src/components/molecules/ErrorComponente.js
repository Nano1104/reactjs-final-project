import React from 'react'
import {Link} from 'react-router-dom'

const ErrorComponente = () => {
  return (
    <div>
        <h2>
            Lo siento ha Habido un Error!!
            <Link to='/productos'>IR A PRODUCTOS</Link>
        </h2>
    </div>
  )
}

export default ErrorComponente