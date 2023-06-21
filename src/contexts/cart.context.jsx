import {createContext, useState} from "react";
import categoryItemComponent from "../components/category-item/category-item.component";

export const CartContext = createContext(
    {
        openState: false,
        setOpenState: () => null,
        cartItems: [],
        addItemToCart: () => {
        }
    }
)


function returnItems(cartItems, item){

    const cartItem = cartItems.find(cart => item.id === cart.id)

    if(cartItem){
        return cartItems.map(cart => item.id === cart.id ? {...cart, quantity : 1 + cart.quantity}: cart )
    }

    return [...cartItems, {...item, quantity : 1}]
}

function CartProvider({children}) {

    const [openState, setOpenState] = useState(null)
    const [cartItems, setCartItems] = useState([])

    function addItemToCart(item) {

        setCartItems(returnItems(cartItems, item))

    }

    const value = {openState, setOpenState, addItemToCart, cartItems}
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}

export default CartProvider