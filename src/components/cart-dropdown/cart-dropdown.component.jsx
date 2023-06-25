import {CartButton, CartDropDownContainer, CartItems} from './cart-dropdown.styles'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";

function CartDropDown(){
    const {cartItems} = useContext(CartContext)
    const items = cartItems ? cartItems.map(
        item =>
            <CartItem
                key = {item.id}
                info ={item}
            />) : ''
    return (
        <CartDropDownContainer className="cart-dropdown-container">
            <CartItems className='cart-items'>
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