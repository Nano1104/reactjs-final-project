import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpeg'

const NavBar=()=>{

    return (
      <>
        <Navbar className="navBar" expand="lg">
          <Navbar.Brand>
            <Nav.Link as={Link} to="/"><img src={logo} id="navLog" alt="logo"></img></Nav.Link>
          </Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="text-white mx-4">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="text-white mx-4">Productos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <CartWidget />
        </Navbar>
      </>
    )
}

export default NavBar;