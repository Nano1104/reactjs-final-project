import { useNavigate } from 'react-router-dom';
import {useState} from "react"

export default function ItemCount ({stock, cantidad, setCantidad, onAdd}){
    const [max, setMax]=useState(false)    

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

    const handleMaxStock=()=>{
        if(cantidad >= stock){
            setMax(true)
        }
    }

    const handleIncrementar=()=>{
        if(cantidad < stock){
            setCantidad(cantidad +1);
        }
        handleMaxStock();
    }
    
    const handleReducir=()=>{
        if(cantidad > 1){
            setCantidad(cantidad -1 )
            setMax(false)
        }
    }

    return <div className="d-flex align-items-center flex-column" style={{fontSize: "20px", marginTop: "50px"}}>
        <p style={{marginRight: "110px"}}>Ingrese la cantidad</p>

        {
            max
            ? <b style={{color: "red", fontSize: "15px", marginRight: "50px"}}>No puedes agregar más productos</b>
            : ''
        }
        
        <div className="d-flex justify-content-center" id="cantidadModifier">
            <input type="text" value={cantidad} style={{width: "50%", padding: "3px"}}></input>

            <button onClick={handleReducir} className="btn-less" style={{marginLeft: "2px"}}>-</button>
            <button onClick={handleIncrementar} className="btn-plus" style={{marginLeft: "2px"}}>+</button>
        </div>
        <div className="my-2" style={{marginRight: "20px"}}>
            <button className="btn btn-success m-1" onClick={onAdd}>AGREGAR PRODUCTO</button>
            <button onClick={handleNavigate} className="btn btn-warning">VOLVER</button> 
        </div>
    </div>

}
