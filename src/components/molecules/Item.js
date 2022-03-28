import React from 'react';

export default function Item({props}){
    return <div className="item">
            <li>
                <h2>{props.id} - {props.tiltle}</h2>
                <img src={props.url} alt="" className="itemImage"></img>
                <button>VER PRODUCTO</button>
            </li>
        </div>
}