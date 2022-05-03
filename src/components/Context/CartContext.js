import {createContext} from "react"
import {useState} from "react"

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart, setCart]=useState([]);
    const [amount, setAmount]=useState(0);

    const addItem=(item)=>{
        setCart( [...cart, item] )
    }

    const isInCart=(id)=>{
        return cart.some(prod=>prod.id === id);
    }

    const cartQuantity=()=>{
        return cart.reduce((acc, prod)=>acc += prod.cantidad, 0)
    }

    /* const reducePrice=()=>{

    } */

    const precioTotal=()=>{
        return cart.reduce((acc, prod)=>acc += prod.price * prod.cantidad, 0)
    }

    const emptyCart=()=>{
        setCart([])
    }

    const removeItems=()=>{
        setCart(cart.filter((prod)=>prod.id !== prod.id))
        /* if(prod.cantidad === 1){
            setCart(cart.filter((prod)=>prod.id !== prod.id))
        }else{
            const prodCantidad=prod.cantidad -= 1
            console.log(prodCantidad)
        } */
    }

    return <CartContext.Provider value={{
                cart,
                addItem,
                isInCart,
                cartQuantity,
                precioTotal,
                emptyCart,
                removeItems
            }}>
            {children}
    </CartContext.Provider>
}