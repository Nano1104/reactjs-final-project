import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpeg'

const NavBar=()=>{
    return (
      <>
      <Navbar className="bg-secondary bg-gradient" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/"><img src={logo} id="navLog"></img></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/Anillo">Anillos</Nav.Link>
            <Nav.Link as={Link} to="/category/Aro">Aros</Nav.Link>
            <Nav.Link as={Link} to="/category/Collar">Collares</Nav.Link>
            <Nav.Link as={Link} to="/category/Pulsera">Pulseras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
      </Navbar>
      </>
      
    )
}

export default NavBar;