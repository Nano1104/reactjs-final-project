import React, { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from "react-bootstrap"
//componentes
import CartWidget from '../CartWidget/CartWidget';
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
//context
import { NavBarContext } from "../NavBarContext/NarBarContex"
//variables de firebase
import { db } from "../Firebase/Firebase"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const { cartLength } = useContext(NavBarContext)
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        // armamos la referencia a un producto con su id //
        const docRef = doc(db, "Productos", id)  
        getDoc(docRef)    // trabajamos con esa referencia //
          .then((res) => {
            console.log("🚀 ~ .then ~ res:", res)
            setProducto({ id: res.id, ...res.data() })
          })
          .catch((err) => {
            console.log(`Error getting doc: ${err}`)
          })

        .finally(() => {setLoading(false);});
    }, [id]);

  return (
    <>
    <div id="itemDetailContainer">
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
                <h2 className="flex justify-center text-ItemDetail">{producto.description}</h2>  
              <hr className="border border-slate-950 mt-4"></hr>
              <ItemDetail id={producto} />
            </>  
        }
      </div>
    </>
  )
}

export default ItemDetailContainer