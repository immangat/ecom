import './cart-dropdown.styles.scss'
import Button from "../button/button.component";

function CartDropDown(){

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                <Button
                    type = 'button'
                >
                    Go To CheckOut
                </Button>
            </div>
        </div>
    )
}

export default CartDropDown