import {CheckOutItemContainer,Quantity,Arrow,Image,Pointer } from './check-out-item.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

function CheckOutItem({info}) {

    const {
        addItemToCart,
        decreaseQuantity,
        removeItemFromCart
    } = useContext(CartContext)

    const {id, imageUrl, name, quantity, price} = info
    return (
        <CheckOutItemContainer className='check-out-item-container'>
            <Image src={imageUrl} alt={name}/>
            <span>{name}</span>
            <Quantity className='quantity'>
                <Arrow onClick={() => decreaseQuantity(quantity, id)} className='clickable arrow'> &#10094; </Arrow>
                <span > {quantity}</span>
                <Arrow onClick={() => addItemToCart(info)} className='clickable arrow'>&#10095;</Arrow>
            </Quantity>
            <span>{price}</span>
            <Pointer onClick={() => removeItemFromCart(id)} className='clickable'>&#10005;</Pointer>
        </CheckOutItemContainer>
    )
}

export default CheckOutItem