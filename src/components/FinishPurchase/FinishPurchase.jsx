import {Link} from 'react-router-dom'

const FinishPurchase = ({order, name, prueba}) => {
  return (
    <div className="fondo4">
        <div className="finishPoster">
            <h1>¡Genial {name}!</h1>
            <h2>Tu compra se ha enviado con exito!</h2>
            <div className="click"></div>
            <strong>Tu numero de compra: {order}</strong>
        </div>
        <Link to="/productos">
            <button className="btnFinishPurchase">VOLVER A LISTA DE PRODUCTOS</button>
        </Link>
    </div>
  )
}

export default FinishPurchase