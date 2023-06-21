import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import './cart-icon.styles.scss'
import {CartContext} from "../../contexts/cart.context";

function CartIcon(){

    const {setOpenState, openState, cartCount} = useContext(CartContext)
    function toggleCart(){
        setOpenState(!openState)
    }
    return (
        <div className="cart-icon-container" onClick = {toggleCart}>
            <Cart className = "shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon