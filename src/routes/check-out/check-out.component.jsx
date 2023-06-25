import {
    CartPrice,
    CheckOutHeader,
    CheckOutHeaderValues,
    CheckOutInnerContainer,
    CheckOutItems,
    CheckOutOuterContainer
} from './check-out.styles'
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
        <CheckOutOuterContainer>
            {
                cartCount ?
                    <CheckOutInnerContainer>
                        <CheckOutHeader className='checkout-header'>
                            <CheckOutHeaderValues className='checkout-header-values'>
                                <span>Product</span>
                                <span>Description</span>
                                <span>Quantity</span>
                                <span>Quantity</span>
                                <span>Price</span>
                                <span>Remove</span>
                            </CheckOutHeaderValues>
                            <hr style={{
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }}/>
                        </CheckOutHeader>
                        <CheckOutItems className='check-out-items'>
                            {items}
                        </CheckOutItems>
                        <CartPrice className='cart-price'>
                            <h1>Total Price: ${cartPrice}</h1>
                        </CartPrice>
                    </CheckOutInnerContainer>
                    :
                    <div>
                        <h1>Cart is currently empty</h1>
                    </div>

            }

        </CheckOutOuterContainer>
    )

}

export default CheckOut