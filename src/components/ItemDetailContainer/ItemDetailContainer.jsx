import React, { useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom';
import {Navbar} from "react-bootstrap"
//componentes
import CartWidget from '../CartWidget/CartWidget';
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
//context
import {NavBarContext} from "../NavBarContext/NarBarContex"
//variables de firebase
import {db} from "../Firebase/Firebase"
import {doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const {cartLength}=useContext(NavBarContext)
    const [producto, setProducto]=useState({});
    const [loading, setLoading]=useState(false);

    const {id}=useParams();
    
    useEffect(() => {
        setLoading(true);
        
        // armamos la referencia a un producto y su id //
        const docRef = doc(db, "Productos", id)
        // trabajamos con esa referencia //
        getDoc(docRef)
          .then((res) => {
            setProducto({id: res.id, ...res.data()})
          })

        .finally(() => {setLoading(false);});
    }, [id]);

  return (
    <>
    <div className="fondoItemDetailContainer">
      {/* El state de cartLength se setea en ItemCount, y si es true se renderiza navBar con el cartWidget*/}
        {
          cartLength
          ? <Navbar className="navBar" expand="lg">
              <CartWidget />
            </Navbar>
          : ''
        }
        
        {
          loading
            ?
            <Loading text={"Renderizando producto..."}/>
            :
            <>
              <hr></hr>
                <h2 className="d-flex justify-content-center text-ItemDetail">{producto.description}</h2>  
              <hr></hr>
              {/* traemos el ItemDetail y le pasamos las props del prod.find */}
              <ItemDetail id={producto}/>
            </>  
        }
      </div>
    </>
  )
}

export default ItemDetailContainer