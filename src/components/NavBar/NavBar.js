import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpeg'
import {useState} from 'react'


const NavBar=()=>{

  const [bar, setBar] = useState(true)

  const mostrarMensaje=()=>{
    console.log("FUNCIONA")
    setBar(false)
  }

    return (
      <>
      
      <Navbar className="navBar" expand="lg">
          <Container>
            <Navbar.Brand>
              <Nav.Link as={Link} to="/"><img src={logo} id="navLog"></img></Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="text-white" onClick={mostrarMensaje}>Productos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <CartWidget />
        </Navbar>
      
      </>
      
    )
}

export default NavBar;