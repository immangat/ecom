import {CART_ACTIONS_TYPES} from "./cart.types";


export const INITIAL_STATE_CART = {
    openState: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE_CART, action) => {
    const {type, payload} = action

    switch (type) {

        case CART_ACTIONS_TYPES.SET_OPEN_STATE:
            return {
                ...state,
                ...payload
            }
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            return state

    }
}