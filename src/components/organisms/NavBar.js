import React from "react";
//importamos el Cart
import Cart from '../molecules/CartWidget'

const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>ARTEMIS</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contactanos</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Anillos</a></li>
                  <li><a className="dropdown-item" href="#">Aros</a></li>
                  <li><a className="dropdown-item" href="#">Cadenas y Dijes</a></li>
                  <li><a className="dropdown-item" href="#">Pulseras</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <Cart />
      </nav>
    )
}

export default NavBar;