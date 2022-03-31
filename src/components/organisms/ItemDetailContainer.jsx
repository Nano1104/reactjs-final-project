import React, { useState, useEffect } from 'react'
import {getItems} from '../mocks/fakeApi'
import ItemDetail from '../molecules/ItemDetail'
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  
    const [producto, setProducto]=useState({});
    const [loading, setLoading]=useState(false);

    const {id}=useParams();
  
    useEffect(() => {
        setLoading(true);
        getItems.then((res)=>{
          setProducto(res.find((prod)=>prod.id===Number(id)));
        });
        /* getItems.catch(err=>{alert(err)}); */
        getItems.finally(() => {setLoading(false);});
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