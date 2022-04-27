import React from 'react'
import bg from '../../images/fondo.png'

const Background = () => {
  return (
    <div style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "89vh",
        position: "relative"
    }} >
        <div className="bg-image">
            <h1 className="tiltle">ARTEMIS</h1>
        </div>
    </div>
  )
}

export default Background