import {CartItemContainer, CartItemImage, ItemInfo} from './cart-item.styles'

function CartItem({info}) {
    const {imageUrl, name, price, quantity} = info

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name}></CartItemImage>
            <ItemInfo>
                <span>{name}</span>
                <span>
                   {quantity} x ${price}
               </span>
            </ItemInfo>
        </CartItemContainer>
    )
}

export default CartItem