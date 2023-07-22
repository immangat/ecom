import {CartButton, CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "../../store/cart/cart.selector";

function CartDropDown(){
    const {cartItems} = useSelector(selectCart)
    const items = cartItems.length ? cartItems.map(
        item =>
            <CartItem
                key = {item.id}
                info ={item}
            />) : (<EmptyMessage>
        Your cart is empty
    </EmptyMessage>)
    return (
        <CartDropDownContainer>
            <CartItems>
                {items}
            </CartItems>
            <Link to='/checkout'>
                <CartButton
                    type = 'button'
                >
                    Go To CheckOut
                </CartButton>
            </Link>

        </CartDropDownContainer>
    )
}

export default CartDropDown