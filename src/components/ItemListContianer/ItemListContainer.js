/* importamos lo necesario para renderizar firebase y su navegacion */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../Firebase/Firebase"

import { Link } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";

import ItemList from "../ItemList/ItemList"
import CartWidget from "../CartWidget/CartWidget";
import Loading from '../Loading/Loading'


const ItemListContainer=()=>{
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { id: categoryId } = useParams();
    
    useEffect(()=>{
        setError(false)
        setLoading(true);
        // armamos la referencia //
        const productosRef = collection(db, "Productos");
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef  //que traiga los productos que correspondan con el id de la cateogia.
        // la llamamos de manera async //
        getDocs(q)
            .then((res) => {
                const itemsFirestore = res.docs.map((doc) => ( {id: doc.id, ...doc.data()} ));

                return itemsFirestore.length === 0 ? setError(true) : setProductos(itemsFirestore)
            })

        .finally(() => { setLoading(false) });
    }, [categoryId]);

    return (
    <>
      <div>
        <nav className="text-xl flex justify-around items-center h-20 mb-6 border-b-[1px]" id="itemListNav">
          <li><Link to="/" className="no-underline hover:scale-110 nav-link">Inicio</Link></li>
          <li><Link to="/category/Acoustic Guitar" className="no-underline hover:scale-110 nav-link">Guitarras Acústicas</Link></li>
          <li><Link to="/category/Electric Guitar" className="no-underline hover:scale-110 nav-link">Guitarras Eléctricas</Link></li>
          <li><Link to="/category/Drum" className="no-underline hover:scale-110 nav-link">Sets</Link></li>
          <li><Link to="/category/Teclado" className="no-underline hover:scale-110 nav-link">Teclados</Link></li>
          <CartWidget />
        </nav>
        {
          loading
            ? <Loading text={"Renderizando productos..."}/>
            : ''
        }
        {
          error
          ?
          <div className="flex justify-center" id="error-rendering-container">
            <MdErrorOutline className="btn-errorRendering" />
            <span>Error al renderizar los productos</span>
            <form method="get">
              <button type="submit">Recargar página</button>
            </form>
          </div>
          :
          <div className="flex justify-center">
            <ItemList items={productos} />
          </div>
        }
      </div>
    </>
    )
}

export default ItemListContainer;

