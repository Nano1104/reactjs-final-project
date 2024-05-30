import { createContext } from "react"
import { useState } from "react"

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart( [...cart, item] )
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.cantidad, 0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const reduceAmount = (item) => {
        const itemFound = cart.find(prod => prod.id === item.id)
        const itemIndex = cart.indexOf(itemFound);

        if(item.cantidad === 1) {
            removeItem(item.id)
        } else {
            itemFound.cantidad = item.cantidad - 1
            console.log(cart[itemIndex] = itemFound)
            setCart([...cart])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{
                cart,
                setCart,
                addItem,
                isInCart,
                cartQuantity,
                precioTotal,
                emptyCart,
                reduceAmount,
                removeItem
            }}>
            {children}
    </CartContext.Provider>
}