import React from 'react';
import Item from './Item'



export default function ItemList({items}){
    return <ul className="cajaItem">
        {
            items.map(item => <Item props={item} key={item.id}/>)
        }
    </ul>
}