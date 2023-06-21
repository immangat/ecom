import './product-card.styles.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
function ProductCard({info}){
    const {name, imageUrl, price} = info
    const {addItemToCart} = useContext(CartContext)

    return (
        <div className="product-card-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
                <Button
                    type='button'
                    buttonType='inverted'
                    onClick = {() => addItemToCart(info)}
                >
                    ADD TO CART
                </Button>
            </div>
            <div className="text">
                <span className="product-name">
                    {name}
                </span>
                <span className="product-price">
                    {price}
                </span>
            </div>
        </div>
    )
}


export default ProductCard