import {Link} from "react-router-dom"

export default function ItemCount ({stock, cantidad, setCantidad, onAdd}){
    
    const handleIncrementar=()=>{
        if(cantidad < stock){
            setCantidad(cantidad +1);
        }
    }
    
    const handleReducir=()=>{
        if(cantidad > 1){
            setCantidad(cantidad -1 )
        }
    }

    return <div className="">
        <strong>Stock Disponible: {stock}</strong>
        <div>

        <button onClick={handleReducir} className="btn btn-primary m-2">-</button>
        <span>{cantidad}</span>
        <button onClick={handleIncrementar} className="btn btn-primary m-2">+</button>
        </div>
        <button className="btn btn-primary" onClick={onAdd}>AGREGAR PRODUCTO</button>
        <Link to="/cart">
            <button className="btn btn-primary">FINALIZAR COMPRA</button>
        </Link>
    </div>

}