import './cart-item.styles.scss'

function CartItem({info}){
    const {imageUrl, name, price, quantity} = info

    return(
       <div className='cartItem-container'>
           <img src={imageUrl} alt = {name}></img>
           <div className='item-info'>
               <span className='item-name'>{name}</span>
               <span className='item-quantity'>
                   {quantity} x ${price}
               </span>
           </div>
       </div>
    )
}

export default CartItem