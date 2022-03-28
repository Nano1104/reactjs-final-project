import React, { useState, useEffect } from 'react'
import {getItems} from '../mocks/fakeApi'
import ItemDetail from '../molecules/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({});
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        getItems.then((res) => {setProducto(res.find((prod)=>prod.id===5))});
        getItems.catch(err=>{alert(err)});
        getItems.finally(() => {setLoading(false);});
    }, []);

  return (
    <div>
        <hr></hr>
        <h2 className="d-flex justify-content-center">ItemDetailContainer</h2>
        {loading ? <strong className="d-flex justify-content-center">Renderizando ropiedades del producto</strong> : ''}
        {/* traemos el ItemDetail y le pasamos las props del prod.find */}
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer