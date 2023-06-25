
import {useContext} from "react";
import {CartIconContainer,ShoppingIcon, Count } from './cart-icon.styles'
import {CartContext} from "../../contexts/cart.context";

function CartIcon(){

    const {setOpenState, openState, cartCount} = useContext(CartContext)
    function toggleCart(){
        setOpenState(!openState)
    }
    return (
        <CartIconContainer className="cart-icon-container" onClick = {toggleCart}>
            <ShoppingIcon className = "shopping-icon"/>
            <Count className="item-count">{cartCount}</Count>
        </CartIconContainer>
    )
}

export default CartIcon