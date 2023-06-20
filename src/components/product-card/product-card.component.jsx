import './product-card.styles.scss'
import Button from "../button/button.component";
function ProductCard({info}){
    const {name, imageUrl, price} = info
    return (
        <div className="product-card-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
                <Button
                    type='button'
                    buttonType='inverted'
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