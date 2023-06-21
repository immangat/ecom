import './check-out-item.styles.scss'
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
        <div className='check-out-item-container'>
            <img src={imageUrl} alt={name}/>
            <span>{name}</span>
            <div className='quantity'>
                <span onClick={() => decreaseQuantity(quantity, id)} className='clickable arrow'> &#10094; </span>
                <span > {quantity}</span>
                <span onClick={() => addItemToCart(info)} className='clickable arrow'>&#10095;</span>
            </div>
            <span>{price}</span>
            <span onClick={() => removeItemFromCart(id)} className='clickable'>&#10005;</span>
        </div>
    )
}

export default CheckOutItem