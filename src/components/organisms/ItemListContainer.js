import React from "react";
import ItemList from "../molecules/ItemList"
import { useEffect } from "react";

/* importamos las imagenes */
import anillo1 from '../../images/anillo1.jpg';
import anillo2 from '../../images/anillo2.jpg';
import anillo3 from '../../images/anillo3.jpg';

const arrayProductos=[{
    id: 1,
    description: 'Anillo de Acero Quirúrico con Perla',
    tiltle: "Anillo",
    price: 300,
    url: anillo1
},
{
    id: 2,
    description: 'Anillos de compromiso Acero y Oro',
    tiltle: "Anillo",
    price: 450,
    url: anillo2
},
{
    id: 3,
    description: 'Anillo de Oro blanco con Perla',
    tiltle: "Anillo",
    price: 350,
    url: anillo3
}]

export default function ItemListContainer(){

    function ObjetenerProductos(){
        const promesa=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(true){
                    resolve(arrayProductos);
                }else{
                    reject("No funciona");
                }
            }, 2000);
        });
    
        promesa.then((respuesta)=>{
            console.log(respuesta)
        });
        promesa.catch((error)=>{
            console.log(error)
        });
    }
    ObjetenerProductos();

    return <div>
        <ItemList items={arrayProductos}/>
    </div>
}





