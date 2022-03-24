import React from "react";
//importamos fontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//importamos los iconos solidos
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; 


const Cart=()=>{
    return <div class="d-flex">
            <FontAwesomeIcon icon={faCartShopping} class='cart-shopping mx-3'/>
            <p class='lenght'>0</p>
        </div>
}

export default Cart;