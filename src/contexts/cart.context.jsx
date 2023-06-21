import {createContext, useEffect, useState} from "react";
import categoryItemComponent from "../components/category-item/category-item.component";

export const CartContext = createContext(
    {
        openState: false,
        setOpenState: () => null,
        cartItems: [],
        addItemToCart: () => {
        },
        cartCount: 0,
        cartPrice : 0
    }
)


function returnItems(cartItems, item) {

    const cartItem = cartItems.find(cart => item.id === cart.id)

    if (cartItem) {
        return cartItems.map(cart => item.id === cart.id ? {...cart, quantity: 1 + cart.quantity} : cart)
    }

    return [...cartItems, {...item, quantity: 1}]
}

function CartProvider({children}) {

    const [openState, setOpenState] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

    function addItemToCart(item) {

        setCartItems(returnItems(cartItems, item))

    }

    function removeItem(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    function increaseQuantity(id) {
        setCartItems(prev => prev.map(
            item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
    }

    function decreaseQuantity(id) {
        setCartItems(prev => prev.map(
            item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item))

    }

    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))
        setCartPrice(cartItems.reduce((total, item) => total + (item.quantity * item.price), 0))
    }, [cartItems])

    const value = {
        openState,
        setOpenState,
        addItemToCart,
        cartItems,
        cartCount,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        cartPrice
    }
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}

export default CartProvider