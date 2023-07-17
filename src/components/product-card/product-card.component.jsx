import {ProductCardContainer, Text, ImageContainer, Image, ProductButton} from './product-card.styles'
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useContext,} from "react";
import { CartContext} from "../../contexts/cart.context";

function ProductCard({info}) {
    const {name, imageUrl, price} = info

    const {addItemToCart} = useContext(CartContext)

    return (
        <ProductCardContainer className="product-card-container">
            <ImageContainer className="image-container">
                <Image src={imageUrl} alt={name}/>
                <ProductButton
                    type='button'
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    onClick={() => addItemToCart(info)}
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