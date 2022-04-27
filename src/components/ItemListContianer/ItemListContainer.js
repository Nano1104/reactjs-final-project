/* importamos lo necesario para renderizar firebase y su navegacion */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../Firebase/Firebase"

/* importamos props para el navBar */
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import ItemList from "../ItemList/ItemList"
import CartWidget from "../CartWidget/CartWidget";



const ItemListContainer=()=>{
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(false);

    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        
        // armamos la referencia //
        const productosRef=collection(db, "Productos");
        const q= id ? query(productosRef, where('category', '==', id)) : productosRef
        // la llamamos de manera async //
        getDocs(q)
            .then((res) => {
                const itemdDb=res.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                console.log(itemdDb)
                setProductos(itemdDb);
            })

        .finally(()=>{setLoading(false);});
    }, [id]);

    return <div>
        <Navbar className="navBar" expand="lg">
        <Container>
            <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/category/Anillo" className="text-white">Anillos</Nav.Link>
              <Nav.Link as={Link} to="/category/Aro" className="text-white">Aros</Nav.Link>
              <Nav.Link as={Link} to="/category/Collar" className="text-white">Collares</Nav.Link>
              <Nav.Link as={Link} to="/category/Pulsera" className="text-white">Pulseras</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
        </Navbar>
        <div className="fondo2">
          {loading
          ?<strong className="d-flex justify-content-center text-white">Renderizando elementos...</strong>
          : ''}
          <ItemList items={productos}/>
        </div>
        
    </div>
}

export default ItemListContainer;



