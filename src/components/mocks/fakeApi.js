
/* importamos las imagenes */
import anillo1 from '../../images/anillo1.jpg';
import anillo2 from '../../images/anillo2.jpg';
import anillo3 from '../../images/anillo3.jpg';
import anillo4 from '../../images/anillo4.jpg';
import anillo5 from '../../images/anillo5.jpg';
import aro1 from '../../images/aro1.jpg';
import aro2 from '../../images/aro2.jpg';
import aro3 from '../../images/aro3.jpg';
import aro4 from '../../images/aro4.jpg';
import aro5 from '../../images/aro5.jpg';
import collar1 from '../../images/collar1.jpg';
import collar2 from '../../images/collar2.jpg';
import collar3 from '../../images/collar3.jpg';
import collar4 from '../../images/collar4.jpg';     
import collar5 from '../../images/collar5.jpg';
import pulsera1 from '../../images/pulsera1.jpg';
import pulsera2 from '../../images/pulsera2.jpeg';
import pulsera3 from '../../images/pulsera3.jpeg';
import pulsera4 from '../../images/pulsera4.jpg';
import pulsera5 from '../../images/pulsera5.jpg';

const arrayProductos=[{
    id: 1,
    description: 'Anillo de Acero Quirúrico con Perla',
    stock: 9,
    category: "Anillo",
    price: 300,
    url: anillo1
},
{
    id: 2,
    description: 'Anillos Triple con Perlas',
    stock: 5,
    category: "Anillo",
    price: 475,
    url: anillo2
},
{
    id: 3,
    description: 'Anillo para Pareja',
    stock: 7,
    category: "Anillo",
    price: 200,
    url: anillo3
},
{
    id: 4,
    description: 'Anillo de Acero con Perla',
    stock: 7,
    category: "Anillo",
    price: 430,
    url: anillo4
},
{
    id: 5,
    description: 'Anillo de oro con Perla',
    stock: 7,
    category: "Anillo",
    price: 400,
    url: anillo5
},
{
    id: 6,
    description: 'Aro de Perla',
    stock: 7,
    category: "Aro",
    price: 500,
    url: aro1
},
{
    id: 7,
    description: 'Aro de oro',
    stock: 7,
    category: "Aro",
    price: 200,
    url: aro2
},
{
    id: 8,
    description: 'Aro Tifani',
    stock: 7,
    category: "Aro",
    price: 400,
    url: aro3
},
{
    id: 9,
    description: 'Aro acero',
    stock: 7,
    category: "Aro",
    price: 300,
    url: aro4
},
{
    id: 10,
    description: 'Aro de oro',
    stock: 7,
    category: "Aro",
    price: 225,
    url: aro5
},
{
    id: 11,
    description: 'Collar Tifani',
    stock: 7,
    category: "Collar",
    price: 350,
    url: collar1
},
{
    id: 12,
    description: 'Collar con Perla',
    stock: 7,
    category: "Collar",
    price: 600,
    url: collar2
},
{
    id: 13,
    description: 'Collar oro con Dije',
    stock: 7,
    category: "Collar",
    price: 600,
    url: collar3
},
{
    id: 14,
    description: 'Collar con Dije',
    stock: 7,
    category: "Collar",
    price: 500,
    url: collar4
},
{
    id: 15,
    description: 'Collar con Dije Corazón',
    stock: 7,
    category: "Collar",
    price: 480,
    url: collar5
},
{
    id: 16,
    description: 'Pulsera de Cruz',
    stock: 7,
    category: "Pulsera",
    price: 450,
    url: pulsera1
},
{
    id: 17,
    description: 'Pulsera de Acero con Tifani',
    stock: 7,
    category: "Pulsera",
    price: 750,
    url: pulsera2
},
{
    id: 18,
    description: 'Pulsera de Acero con Tifanis',
    stock: 7,
    category: "Pulsera",
    price: 800,
    url: pulsera3
},
{
    id: 19,
    description: 'Pulsera de Acero Quirúrgico',
    stock: 7,
    category: "Pulsera",
    price: 800,
    url: pulsera4
},
{
    id: 20,
    description: 'Pulsera de Acero hilo Negro',
    stock: 7,
    category: "Pulsera",
    price: 650,
    url: pulsera5
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