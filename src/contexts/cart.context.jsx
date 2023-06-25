import {createContext, useEffect, useState} from "react";

export const CartContext = createContext(
    {
        openState: false,
        setOpenState: () => null,
        cartItems: [],
        addItemToCart: () => {
        },
        cartCount: 0,
        cartPrice : 0,
        removeItemFromCart: () => {}
        ,
        decreaseQuantity: () => {}
    }
)


function returnItems(cartItems, item) {

    const cartItem = cartItems.find(cart => item.id === cart.id)

    if (cartItem) {
        return cartItems.map(cart => item.id === cart.id ? {...cart, quantity: 1 + cart.quantity} : cart)
    }

    return [...cartItems, {...item, quantity: 1}]
}

function removeItem(cartItems, id){
    return cartItems.filter(item => item.id !== id)
}

function decreaseItem(cartItems, id){
    return cartItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
}

function CartProvider({children}) {

    const [openState, setOpenState] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

    function addItemToCart(item) {
        setCartItems(returnItems(cartItems, item))
    }

    function removeItemFromCart(id) {
        setCartItems(removeItem(cartItems, id))
    }

    function decreaseQuantity(quantity, id) {
        if(quantity === 1){
            setCartItems(removeItem(cartItems, id))
            return
        }
        setCartItems(decreaseItem(cartItems, id))
    }

    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))

    }, [cartItems])

    useEffect(()=>{
        setCartPrice(cartItems.reduce((total, item) => total + (item.quantity * item.price), 0))
    }, [cartItems])

    const value = {
        openState,
        setOpenState,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        decreaseQuantity,
        cartPrice
    }
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}

export default CartProvider