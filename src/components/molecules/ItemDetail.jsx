import {useState} from 'react' 
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

/* Props para el ItemCount */

const onAdd=(cantidad)=>{
  if(cantidad==0){
    alert("Lo siento no tienes stock que comprar");
  }
}


const ItemDetail = ({producto}) => {
  const {id, description, stock, category, price, url} = producto;

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

    const [cantidad, setCantidad]=useState(1);
    const [prodEnviado, setProdEnviado]=useState();

    const agregarAlCarrito=(cantidad)=>{
      const itemAdd={id, category, stock, price, url}
      if(prodEnviado){
        console.log("Ya hay un producto agregado en el carro");
      }else{
        setProdEnviado(itemAdd);
        alert("Producto agregado");
      }
    }

  return (
    <div>
      <div className="itemDetail border border-3 border-primary">
          <h4>{description}</h4>
          <strong>Stock disponible: {stock}</strong>
          <img src={url} alt="" className="itemImage m-2"></img>
          <h4>PRECIO: {price}ARS</h4>
          <ItemCount stock={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  onAdd={agregarAlCarrito} />
          <button onClick={handleNavigate} className="btn btn-primary">VOLVER</button>  
      </div>
    </div>
  )
}

export default ItemDetail