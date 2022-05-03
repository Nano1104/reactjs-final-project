import { useNavigate, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Card} from 'react-bootstrap'

import {useState, useContext} from 'react' 
import {CartContext} from "../Context/CartContext"
import {NavBarContext} from "../NavBarContext/NarBarContex"

import logo from '../../images/logo.jpeg'

const ItemDetail = ({id}) => {
  const {description, stock, category, price, url} = id;
    const {handleNavBarState}=useContext(NavBarContext)
    const {addItem, isInCart}=useContext(CartContext)

    const [cantidad, setCantidad]=useState(1);

    const agregarAlCarrito=()=>{
      const itemAdd={id, description, stock, category, price, url, cantidad}
      addItem(itemAdd);
      console.log(itemAdd);
      handleNavBarState()
    }

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

  return (
    <>
    <div className="d-flex">
      <div>
        <img variant="top" src={url} className="itemImage" style={{
                                                                  height: "500px",
                                                                  width: "500px",
                                                                  marginLeft: "50px"}} />
      </div>
      <div>
        <div className="d-flex align-items-center flex-column bg-white" id='bg-description'>
          <img src={logo} style={{width: "20%", border: "1px solid", borderRadius: "50%"}} className="my-5"></img>
          <h4>PRECIO: {price}ARS</h4>
          <b style={{borderBottom: "1px solid"}}>Stock disponible: {stock}</b>
          <hr></hr>
          {
            stock > 0 &&
            <>
              {
                !isInCart(id)
                  ? 
                  <>
                      <ItemCount stock={stock}
                      cantidad={cantidad}
                      setCantidad={setCantidad}
                      onAdd={agregarAlCarrito} /> 
                  </>
                  : <Link to="/cart">
                      <button className="btn btn-success btnFinalizarCompra">
                        FINALIZAR COMPRA
                      </button>
                    </Link>
              }
            </>
          }
          {
            stock === 0 &&
            <>
            <strong style={{color: "red"}} className="mt-5">Lo siento este producto no tiene stock</strong>
            <button onClick={handleNavigate} className="btn btn-primary mt-1">VOLVER</button> 
            </>
          }
           
        </div>
      </div>
    </div>

    </>
      
  )
}

export default ItemDetail

