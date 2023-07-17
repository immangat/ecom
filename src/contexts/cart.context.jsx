import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";

export const CartContext = createContext(
    {
        openState: false,
        setOpenState: () => null,
        cartItems: [],
        addItemToCart: () => {
        },
        cartCount: 0,
        cartPrice: 0,
        removeItemFromCart: () => {
        }
        ,
        decreaseQuantity: () => {
        }
    }
)

export const CART_ACTIONS_TYPES = {
    SET_OPEN_STATE: "SET_OPEN_STATE",
    SET_CART_ITEMS: "SET_CART_ITEMS"
}


export const INITIAL_STATE_CART = {
    openState: false,
    cartItems: [],
    cartCount: 0,
    cartPrice: 0
}
export const cartReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {

        case CART_ACTIONS_TYPES.SET_OPEN_STATE:
            return {
                ...state,
                openState: !state.openState
            }
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`)

    }
}


function decreaseItem(cartItems, id) {
    return cartItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
}


function returnItems(cartItems, item) {

    const cartItem = cartItems.find(cart => item.id === cart.id)

    if (cartItem) {
        return cartItems.map(cart => item.id === cart.id ? {...cart, quantity: 1 + cart.quantity} : cart)
    }

    return [...cartItems, {...item, quantity: 1}]
}

function removeItem(cartItems, id) {
    return cartItems.filter(item => item.id !== id)
}


function CartProvider({children}) {

    // const [openState, setOpenState] = useState(null)
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [cartPrice, setCartPrice] = useState(0)
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE_CART)
    const {openState, cartItems, cartCount, cartPrice} = state

    function addItemToCart(item) {
        const newCartItems = returnItems(cartItems, item)
        updateCartItemReducer(newCartItems)
    }

    function removeItemFromCart(id) {
        const newCartItems = removeItem(cartItems, id)
        updateCartItemReducer(newCartItems)

    }

    function decreaseQuantity(quantity, id) {
        const newCartItems = quantity === 1 ? removeItem(cartItems, id) : decreaseItem(cartItems, id)
        updateCartItemReducer(newCartItems)

    }


    const updateCartItemReducer = (newCartItems) => {
        const count = newCartItems.reduce((total, item) => total + item.quantity, 0)
        const price = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
        dispatch({
            type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
            payload: {
                cartCount: count,
                cartPrice: price,
                cartItems: newCartItems
            }
        })

    }

    const changeOpenState = () => {
        dispatch(createAction(CART_ACTIONS_TYPES.SET_OPEN_STATE, false))

    }

    const value = {
        openState,
        cartItems,
        cartCount,
        cartPrice,
        decreaseQuantity,
        removeItemFromCart,
        addItemToCart,
        changeOpenState
    }
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}

export default CartProvider