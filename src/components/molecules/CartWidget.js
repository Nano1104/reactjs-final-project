import React from "react";
//importamos fontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//importamos los iconos solidos
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom' 


const Cart=()=>{
    return <div className="d-flex">
            <FontAwesomeIcon icon={faCartShopping} className='cart-shopping mx-5'/>
            <p className='lenght'>0</p>
        </div>
}

export default Cart;