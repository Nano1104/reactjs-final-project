import React from 'react';
import Item from '../Item/Item'

export default function ItemList({items}){
    return (
        <>
            <div className="cajaList">
                {
                    items.map(item => <Item props={item} key={item.id}/>)
                }
            </div>
        </>
    )
}