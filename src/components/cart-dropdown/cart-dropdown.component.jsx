import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

function CartDropDown(){
    const {cartItems} = useContext(CartContext)
    const items = cartItems ? cartItems.map(
        item =>
            <CartItem
                key = {item.id}
                info ={item}
            />) : ''
    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {items}
            </div>
                <Button
                    type = 'button'
                >
                    Go To CheckOut
                </Button>

        </div>
    )
}

export default CartDropDown