import React, {useState} from "react";

export default function ItemCount (){
    const [cantidad, setCantidad]=useState(0);
    const [texto, setTexto]=useState();
    const [textoLimite, setTextoLimite]=useState();
    /* aumentamos en 1 la cantidad y lanzamos el texto limite cuando no hay stock */
    const incrementar=()=>{
        setCantidad(cantidad +1);
        if(cantidad == 15){
            setCantidad(cantidad);
            setTextoLimite("Alcanzaste el limite de stock");
        }
    }
    /* disminuimos el valor de cantidad en 1 y ocultamos el texto del limite */
    const reducir=()=>{
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }
        setTextoLimite();
    }
    /* lanza el texto cuando finaliza la compra y oculta los valores de cantidad */
    const finalizarCompra=()=>{
        setCantidad(0);
        setTexto("Has finalizado tu compra");
        setTextoLimite();
    }
    
    return <div class="countBox">
            <h2>Stock Disponible: 15</h2>
            <p>{cantidad}</p>
            <p style={{fontSize: "20px"}}>{textoLimite}</p>
            <div>
            <button onClick={reducir} id="btn-less">-</button>
            <button onClick={incrementar} id="btn-plus">+</button>
            </div>
            <button 
            type="button" class="btn btn-secondary" onClick={finalizarCompra} 
            >AGREGAR AL CARRITO</button>
            
            {/* cartel que aparece si se finaliza la compra */}
            <h3>{texto}</h3>
        </div> 
}