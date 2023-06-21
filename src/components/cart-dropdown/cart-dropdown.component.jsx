import './cart-dropdown.styles.scss'
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
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {items}
            </div>
            <Link to='/checkout'>
                <Button
                    type = 'button'
                >
                    Go To CheckOut
                </Button>

            </Link>

        </div>
    )
}

export default CartDropDown