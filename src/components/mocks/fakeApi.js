
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
    description: 'Aros de Perla',
    stock: 7,
    tiltle: "Aros",
    price: 200,
    url: aro1
},
{
    id: 4,
    description: 'Aros dorados',
    stock: 7,
    tiltle: "Aros",
    price: 350,
    url: aro2
},
{
    id: 5,
    description: 'Collar Tifani',
    stock: 7,
    tiltle: "Collar",
    price: 400,
    url: collar1
},
{
    id: 6,
    description: 'Collar con Perla',
    stock: 7,
    tiltle: "Collar",
    price: 500,
    url: collar2
},
{
    id: 7,
    description: 'Pulsera de Oro',
    stock: 7,
    tiltle: "Pulsera",
    price: 500,
    url: pulsera1
},
{
    id: 8,
    description: 'Pulsera de Acero Cristo',
    stock: 7,
    tiltle: "Pulsera",
    price: 600,
    url: pulsera2
}]

/* exportamos la promesa hacia el ItemListContainer */
export const getItems=new Promise((resolve, reject)=>{
    let condition=true;

    setTimeout(()=>{
        if(condition){
            resolve(arrayProductos);
        }else{
            reject("Ha habido un error");
        }
    }, 2000);
});