import {createContext, useState} from "react";

export const CartContext = createContext(

    {
        openState: false,
        setOpenState : () => null
    }
)


function CartProvider({children}){

    const[openState, setOpenState] = useState(null)
    const value = {openState,setOpenState }
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}

export default CartProvider