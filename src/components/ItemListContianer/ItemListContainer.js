import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore"

import ItemList from "../ItemList/ItemList"
import {db} from "../Firebase/Firebase"




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
        {loading ? <strong className="d-flex justify-content-center">Renderizando elementos...</strong> : ''}
        <ItemList items={productos}/>
    </div>
}

export default ItemListContainer;



