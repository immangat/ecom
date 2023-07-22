import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTIONS_TYPES} from "./cart.types";

const makePayload = (newCartItems) => ({
    cartItems : newCartItems
})
function returnItems(cartItems, item) {

    const cartItem = cartItems.find(cart => item.id === cart.id)

    if (cartItem) {
        return cartItems.map(cart => item.id === cart.id ? {...cart, quantity: 1 + cart.quantity} : cart)
    }

    return [...cartItems, {...item, quantity: 1}]
}



function decreaseItem(cartItems, id) {
    return cartItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
}

function removeItem(cartItems, id) {
    return cartItems.filter(item => item.id !== id)
}

export const decreaseQuantity = (cartItems, quantity, id) => {
    const newCartItems = quantity === 1 ? removeItem(cartItems, id) : decreaseItem(cartItems, id)

    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, makePayload(newCartItems))
}

export const removeItemFromCart = (cartItems, id) =>  {
    const newCartItems = removeItem(cartItems, id)
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, makePayload(newCartItems))
}

export const addItemtoCart = (cartItems, item) => {
    const newCartItems = returnItems(cartItems, item)
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, makePayload(newCartItems))
}

export const changeOpenState = (openStat) => {
    return createAction(CART_ACTIONS_TYPES.SET_OPEN_STATE, {openState : !openStat})
}