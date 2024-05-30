/* importamos lo necesario para renderizar firebase y su navegacion */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../Firebase/Firebase"

import { Link } from 'react-router-dom';

import ItemList from "../ItemList/ItemList"
import CartWidget from "../CartWidget/CartWidget";
import Loading from '../Loading/Loading'


const ItemListContainer=()=>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id: categoryId } = useParams();
    
    useEffect(()=>{
        setLoading(true);
        // armamos la referencia //
        const productosRef = collection(db, "Productos");
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef  //que traiga los productos que correspondan con el id de la cateogia.
        // la llamamos de manera async //
        getDocs(q)
            .then((res) => {
                const itemsFirestore = res.docs.map((doc) => ( {id: doc.id, ...doc.data()} ));
                console.log(itemsFirestore)
                setProductos(itemsFirestore);
            })

        .finally(() => { setLoading(false) });
    }, [categoryId]);

    return (
    <>
      <div>
        <nav className="text-xl flex justify-around items-center h-20 mb-6 border-b-[1px]" id="itemListNav">
          <li><Link to="/" className="text-white no-underline">Inicio</Link></li>
          <li><Link to="/category/Acoustic Guitar" className="text-white no-underline">Guitarras Acústicas</Link></li>
          <li><Link to="/category/Electric Guitar" className="text-white no-underline">Guitarras Eléctricas</Link></li>
          <li><Link to="/category/Drum" className="text-white no-underline">Sets</Link></li>
          <li><Link to="/category/Teclado" className="text-white no-underline">Teclados</Link></li>
          <CartWidget />
        </nav>
        {
          loading
            ? <Loading text={"Renderizando productos..."}/>
            : ''
        }
        <div className="flex justify-center">
          <ItemList items={productos} />
        </div>
      </div>
    </>
    )
}

export default ItemListContainer;

