import {useContext} from "react";
import {CartIconContainer, ShoppingIcon, Count} from './cart-icon.styles'
import {
    CartContext,
} from "../../contexts/cart.context";

function CartIcon() {
    const {changeOpenState, cartCount} = useContext(CartContext)

    return (
        <CartIconContainer className="cart-icon-container" onClick={changeOpenState}>
            <ShoppingIcon className="shopping-icon"/>
            <Count className="item-count">{cartCount}</Count>
        </CartIconContainer>
    )
}

export default CartIcon