import React from 'react';
import Item from './Item'



export default function ItemList({items}){
    return <ul class="cajaItem">
        {
            items.map(item => <Item
                                id={item.id}
                                tiltle={item.tiltle}
                                description={item.description}
                                price={item.price}
                                pictureUrl={item.url}
                            />)
        }
    </ul>
}