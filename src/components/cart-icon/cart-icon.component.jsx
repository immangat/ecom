import {CartIconContainer, ShoppingIcon, Count} from './cart-icon.styles'
import {useDispatch, useSelector} from "react-redux";
import {selectCart, selectCartCount} from "../../store/cart/cart.selector";
import {changeOpenState} from "../../store/cart/cart.actions";

function CartIcon() {
    const {openState} = useSelector(selectCart)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    const handleClick = (openState) => {
        dispatch(changeOpenState(openState))
    }

    return (
        <CartIconContainer className="cart-icon-container" onClick={() => handleClick(openState)}>
            <ShoppingIcon className="shopping-icon"/>
            <Count className="item-count">{cartCount}</Count>
        </CartIconContainer>
    )
}

export default CartIcon