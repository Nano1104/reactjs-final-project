import { createContext } from "react"
import { useState } from "react"

// creamos un context para el navBar con el CartWidget //
export const NavBarContext=createContext();

export const NavBarProvider = ({children}) => {
    const [cartLength, setCartLength] = useState(false)

    //esta function es recibida por el ItemCount
    const handleNavBarState = ( )=> {
        setCartLength(true)
    }

    return <NavBarContext.Provider value = {{
                cartLength,
                setCartLength,
                handleNavBarState
              }}>
              {children}
    </NavBarContext.Provider>
}