import {CheckOutItemContainer, Quantity, Arrow, Image, Pointer} from './check-out-item.styles'
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, removeItemFromCart, addItemtoCart} from "../../store/cart/cart.actions";
import {selectCart} from "../../store/cart/cart.selector";

function CheckOutItem({info}) {

    const {cartItems} = useSelector(selectCart)
    const dispatch = useDispatch()


    const {id, imageUrl, name, quantity, price} = info
    return (
        <CheckOutItemContainer className='check-out-item-container'>
            <Image src={imageUrl} alt={name}/>
            <span>{name}</span>
            <Quantity className='quantity'>
                <Arrow onClick={() => dispatch(decreaseQuantity(cartItems, quantity, id))}
                       className='clickable arrow'> &#10094; </Arrow>
                <span> {quantity}</span>
                <Arrow onClick={() => dispatch(addItemtoCart(cartItems, info))} className='clickable arrow'>&#10095;</Arrow>
            </Quantity>
            <span>{price}</span>
            <Pointer onClick={() => dispatch(removeItemFromCart(cartItems, id))} className='clickable'>&#10005;</Pointer>
        </CheckOutItemContainer>
    )
}

export default CheckOutItem