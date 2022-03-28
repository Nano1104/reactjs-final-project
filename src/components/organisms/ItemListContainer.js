
import ItemList from "../molecules/ItemList"
import { useEffect, useState } from "react";
/* importamos la promesa de fakeApi */
import { getItems } from "../mocks/fakeApi"


const ItemListContainer=()=>{
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(false);


    useEffect(()=>{
        setLoading(true);
        getItems.then((res)=>{setProductos(res)});
        getItems.catch(err=>{alert(err)});
        getItems.finally(()=>{setLoading(false);});
    }, []);

    return <div>
        {loading ? <strong className="d-flex justify-content-center">Renderizando elementos...</strong> : ''}
        <ItemList items={productos}/>
    </div>
}

export default ItemListContainer;



