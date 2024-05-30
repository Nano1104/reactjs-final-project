import { useNavigate, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { useState, useContext } from 'react' 
import { CartContext } from "../Context/CartContext"
import { NavBarContext } from "../NavBarContext/NarBarContex"

import logo from '../../images/logo.jpeg'

const loadImage = (imageName) => {      //funcion para importar cierta imagen y usar su url
  try {
      return require(`../../images/${imageName}`);
  } catch (err) {
      console.error(`Failed to load image: ${imageName}`, err);
      return null;
  }
}

const ItemDetail = ({id}) => {
  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();
  const {description, stock, category, price, url} = id;
  const imageUrl = loadImage(url);

  const { handleNavBarState } = useContext(NavBarContext)
  const { addItem, isInCart } = useContext(CartContext)

  const agregarAlCarrito = () => {
    const itemAdd = {id, description, stock, category, price, url, cantidad}
    addItem(itemAdd);
    handleNavBarState()
  }

  
  const handleNavigate=()=>{
    navigate(-1);
  }

  return (
    <>
      <div className="flex justify-center mt-10" id='itemDetail'>
        <div>
          <img variant="top" src={imageUrl} id="itemImage" alt={`item-img`} style={{
                                                                    height: "500px",
                                                                    width: "500px",
                                                                    marginLeft: "50px"}} />
        </div>
        <div>
          <div className="d-flex align-items-center flex-column bg-[var(--gray)] text-[var(--blue)]" id='item-description'>
            <img src={logo} alt={`item-${description}-img`}
            className="my-5 cursor-pointer border-[1px] border-[var(--blue)] rounded-full w-[20%]" />
            <h4>PRECIO: {price}ARS</h4>
            <b className='border-b-[1px] border-slate-700 italic'>Stock disponible: {stock}</b>
            <hr></hr>
            {
              stock > 0 &&
              <>
                {
                  !isInCart(id)
                    ? 
                    <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={agregarAlCarrito} /> 
                    : 
                    <>
                      <Link to="/cart" id="btn-finalizarCompra" className='no-underline'>FINALIZAR COMPRA</Link>
                      <button onClick={handleNavigate} className="btn btn-primary mt-1" id="btn-volver">VOLVER</button> 
                    </>
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

