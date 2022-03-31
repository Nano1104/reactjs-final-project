import React from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

/* Props para el ItemCount */
const initial=1;
const onAdd=(cantidad)=>{
  if(cantidad==0){
    alert("Lo siento no tienes stock que comprar");
  }
}


const ItemDetail = ({producto}) => {

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

    const {id, description, stock, title, price, url} = producto;

  return (
    <div>
      <div className="itemDetail">
          <h4>{description}</h4>
          <strong>Stock disponible: {stock}</strong>
          <img src={url} alt="" className="itemImage m-2"></img>
          <h4>PRECIO: {price}ARS</h4>
          <button onClick={handleNavigate} className="btn btn-primary">VOLVER</button>
      </div>
      <div>
        <ItemCount stock={stock}
                  initial={initial}
                  onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail