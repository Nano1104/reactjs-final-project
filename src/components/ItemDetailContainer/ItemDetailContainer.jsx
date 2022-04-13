import React, { useState, useEffect } from 'react'
import {getItems} from '../mocks/fakeApi'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';

import {db} from "../Firebase/Firebase"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
  
    const [producto, setProducto]=useState({});
    const [loading, setLoading]=useState(false);

    const {id}=useParams();
    
    useEffect(() => {
        setLoading(true);
        
        // armamos la referencia a un producto y su id //
        const itemDocRef = doc(db, "Productos", id)
        // trabajamos con esa referencia //
        getDoc(itemDocRef)
          .then((res) => {
            const prodDb={id: res.id, ...res.data()}
            setProducto(prodDb)
          })

        .finally(() => {setLoading(false);});
    }, [id]);

  return (
    <div>
        <hr></hr>
        <h2 className="d-flex justify-content-center">Detalle Producto</h2>  
        <hr></hr>
        {loading ? <strong className="d-flex justify-content-center">Renderizando ropiedades del producto</strong> : ''}
        {/* traemos el ItemDetail y le pasamos las props del prod.find */}
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer