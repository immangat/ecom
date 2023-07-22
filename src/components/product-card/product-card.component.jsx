import {ProductCardContainer, Text, ImageContainer, Image, ProductButton} from './product-card.styles'
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch, useSelector} from "react-redux";
import {addItemtoCart} from "../../store/cart/cart.actions";
import {selectCart} from "../../store/cart/cart.selector";

function ProductCard({info}) {
    const {name, imageUrl, price} = info
    const dispatch = useDispatch()
    const {cartItems} = useSelector(selectCart)
    return (
        <ProductCardContainer className="product-card-container">
            <ImageContainer className="image-container">
                <Image src={imageUrl} alt={name}/>
                <ProductButton
                    type='button'
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    onClick={() => dispatch(addItemtoCart(cartItems, info))}
                >
                    ADD TO CART
                </ProductButton>
            </ImageContainer>
            <Text className="text">
                <span className="product-name">
                    {name}
                </span>
                <span className="product-price">
                    ${price}
                </span>
            </Text>
        </ProductCardContainer>
    )
}


export default ProductCard