
import ItemList from "../molecules/ItemList"
import { useEffect, useState } from "react";

/* importamos las imagenes */
import anillo1 from '../../images/anillo1.jpg';
import anillo2 from '../../images/anillo2.jpg';
import aro1 from '../../images/aro1.jpg';
import aro2 from '../../images/aro2.jpg';
import collar1 from '../../images/collar1.jpg';
import collar2 from '../../images/collar2.jpg';
import pulsera1 from '../../images/pulsera1.jpg';
import pulsera2 from '../../images/pulsera2.jpg';

const arrayProductos=[{
    id: 1,
    description: 'Anillo de Acero Quirúrico con Perla',
    stock: 9,
    tiltle: "Anillo",
    price: 300,
    url: anillo1
},
{
    id: 2,
    description: 'Anillos de compromiso Acero y Oro',
    stock: 5,
    tiltle: "Anillo",
    price: 450,
    url: anillo2
},
{
    id: 3,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: aro1
},
{
    id: 4,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: aro2
},
{
    id: 5,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: collar1
},
{
    id: 6,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: collar2
},
{
    id: 7,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: pulsera1
},
{
    id: 8,
    description: 'Anillo de Oro blanco con Perla',
    stock: 7,
    tiltle: "Anillo",
    price: 350,
    url: pulsera2
}]

const ItemListContainer=()=>{
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(false);

    const promesa=new Promise((resolve, reject)=>{
        let condition=true;
        setTimeout(()=>{
            if(condition){
                resolve(arrayProductos);
            }else{
                reject("Ha habido un error");
            }
        }, 2000);
    });

    useEffect(()=>{
        setLoading(true);
        promesa.then((res)=>{setProductos(res)});
        promesa.catch(err=>{console.log(err)});
    }, []);

    return <div>
        {loading ? <strong className="d-flex justify-content-center">Renderizando elementos...</strong> : ''}
        <ItemList items={productos}/>
    </div>
}

export default ItemListContainer;



