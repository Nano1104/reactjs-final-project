import React from "react";

const ItemListContainer=({anillos, aros, cadenas, pulseras})=>{
    return <div>
        <ul>
            <li>{anillos}</li>
            <li>{aros}</li>
            <li>{cadenas}</li>
            <li>{pulseras}</li>
        </ul>
    </div>
}

export default ItemListContainer;