import { Link}  from 'react-router-dom'
import { FaRegCheckCircle } from "react-icons/fa";

const FinishPurchase = ({ order, name }) => {
  return (
    <>
      <div className="" id="finishPurchase-container">
          <FaRegCheckCircle className="text-[6rem] mb-3" />
          <h1 className="">¡Gracias por tu compra {name}!</h1>
          <p className="compra-finalizada-mensaje">
              Tu pedido ha sido procesado con éxito. Te enviaremos un correo de confirmación con los detalles de tu compra.
          </p>
          <strong className='italic'>Tu numero de compra: {order}</strong>
          <Link to="/productos" className='btn' id="btn-finishPurchase">Volver a productos</Link>
      </div>
    </>
  ) 
}

export default FinishPurchase

{/* <div className="fondo4">
        <div className="finishPoster">
            <h1>¡Genial {name}!</h1>
            <h2>Tu compra se ha enviado con exito!</h2>
            <div className="click"></div>
            <strong>Tu numero de compra: {order}</strong>
        </div>
        <Link to="/productos">
            <button className="btnFinishPurchase">VOLVER A LISTA DE PRODUCTOS</button>
        </Link>
    </div> */}