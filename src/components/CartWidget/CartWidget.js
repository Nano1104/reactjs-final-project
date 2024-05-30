import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

import {useContext} from "react"
import {CartContext} from "../Context/CartContext"

const CartWidget=()=>{
    const { cartQuantity, cart }=useContext(CartContext);

    return <>
            {
                cart.length > 0 &&
                <>
                    <div>
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="carrito"/>
                            <span className="length text-white absolute top-0 text-[15px] right-7 bg-black p-1 w-8 h-8 rounded-full flex justify-center items-center border border-slate-50">
                                {cartQuantity()}
                            </span>
                        </Link>
                    </div>
                </>
            }
            
    </>
}

export default CartWidget;