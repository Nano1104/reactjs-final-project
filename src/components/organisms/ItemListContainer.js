
import ItemList from "../molecules/ItemList"
import { useEffect, useState } from "react";
/* importamos la promesa de fakeApi */
import { getItems } from "../mocks/fakeApi"
import { useParams } from "react-router-dom";

const ItemListContainer=()=>{
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(false);

    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        getItems.then((res)=>{
            if(id){
                setProductos(res.filter((prod)=>prod.category===id));
            }else{
                setProductos(res);
            }
        });
        getItems.catch(err=>{alert(err)});
        getItems.finally(()=>{setLoading(false);});
    }, [id]);

    return <div>
        {loading ? <strong className="d-flex justify-content-center">Renderizando elementos...</strong> : ''}
        <ItemList items={productos}/>
    </div>
}

export default ItemListContainer;



