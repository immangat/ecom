import './check-out-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

function CheckOutItem({info}) {

    const {
        removeItem,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext)

    const {id, imageUrl, name, quantity, price} = info
    return (
        <div className='check-out-item-container'>
            <img src={imageUrl} alt={name}/>
            <span>{name}</span>
            <div>
                <span onClick={() => decreaseQuantity(id)} className='clickable'> {'<  '} </span>
                <span > {quantity}</span>
                <span onClick={() => increaseQuantity(id)} className='clickable'>{'  >'}</span>
            </div>
            <span>{price}</span>
            <span onClick={() => removeItem(id)} className='clickable'>X</span>
        </div>
    )
}

export default CheckOutItem