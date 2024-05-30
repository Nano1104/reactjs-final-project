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

    return (
        <>
            <div className="d-flex align-items-center flex-column" style={{fontSize: "20px", marginTop: "50px"}}>
                <p className='mr-[115px]'>Ingrese la cantidad</p>

                {
                    max
                    ? <b className='mr-[50px] text-[15px] text-red-500 italic'>No puedes agregar más productos</b>
                    : ''
                }
                
                <div className="d-flex justify-center items-center w-full" id="cantidadModifier">
                    <input type="text" value={cantidad} style={{width: "70%", padding: "3px"}}></input>

                    <button onClick={handleIncrementar} id="btn-plus" style={{marginLeft: "2px"}}>+</button>
                    <button onClick={handleReducir} id="btn-less" style={{marginLeft: "2px"}}>-</button>
                </div>
                <div className="my-2" style={{marginRight: "20px"}}>
                    <button id="btn-addProd" onClick={onAdd}>AGREGAR PRODUCTO</button>
                    <button onClick={handleNavigate} id="btn-backToItems">VOLVER</button> 
                </div>
            </div>
        </>
    )

}
