import './check-out.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckOutItem from "../../components/check-out-item/check-out-item.component";

function CheckOut() {
    const {cartItems, cartPrice, cartCount}= useContext(CartContext)
    const items = cartItems ? cartItems.map(item =>
        <CheckOutItem
            key ={item.id}
            info={item}
        />
    ) : ''
    return (
        <div className='checkout-outer-container'>
            {
                cartCount ?
                    <div className='checkout-inner-container'>
                        <div className='checkout-header'>
                            <div className='checkout-header-values'>
                                <span>Product</span>
                                <span>Description</span>
                                <span>Quantity</span>
                                <span>Quantity</span>
                                <span>Price</span>
                                <span>Remove</span>
                            </div>
                            <hr style={{
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }}/>
                        </div>
                        <div className='check-out-items'>
                            {items}
                        </div>
                        <div className='cart-price'>
                            <h1>Total Price: ${cartPrice}</h1>
                        </div>
                    </div>
                    :
                    <div>
                        <h1>Cart is currently empty</h1>
                    </div>

            }

        </div>
    )

}

export default CheckOut