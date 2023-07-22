import {createSelector} from "reselect";

export const selectCart = (state) => state.cart



const selectCartCountReducer = createSelector(
    [selectCart],
    (cart) => cart.cartItems

)


export const selectCartCount = createSelector(
    [selectCartCountReducer],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartPrice = createSelector(
    [selectCartCountReducer],
    (cartItems) => cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
)

