import React from 'react';

export default function Item({id, tiltle, description, price, pictureUrl}){
    return <div class="item">
            <li>
                <h2>{id} - {tiltle}</h2>
                <p>{description}</p>
                <img src={pictureUrl} alt="" class="imagenP"></img>
                <h3>Precio: {price}ARS</h3>
                <button>VER PRODUC</button>
            </li>
        </div>
}