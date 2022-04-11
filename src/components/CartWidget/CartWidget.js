import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

import {useContext} from "react"
import {CartContext} from "../Context/CartContext"

const CartWidget=()=>{

    const {cartQuantity, cart}=useContext(CartContext);

    return <>
            {
                cart.length > 0 &&
                <>
                    <Link to="/cart">
                        <FaShoppingCart className="carrito"/>
                    </Link>
                    <span className="length">{cartQuantity()}</span>
                </>
            }
            
    </>
}

export default CartWidget;