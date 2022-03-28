import React from 'react';

export default function Item({props}){
    return <div className="item">
            <li>
                <h2>{props.id} - {props.tiltle}</h2>
                <small>Stock disponible: {props.stock}</small>
                <p>{props.description}</p>
                <img src={props.url} alt="" className="itemImage"></img>
                <h3>Precio: {props.price}ARS</h3>
                <button>VER PRODUCTO</button>
            </li>
        </div>
}