import {useContext} from "react";
import {ProductContext} from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'
function Shop() {

    const {products} = useContext(ProductContext)

    const product = products ? products.map(product =>
            <ProductCard
                key = {product.id}
                info = {product}
            />
        )
        : ''
    return (
        <div className="product-cards">
            {product}
        </div>
    )


}

export default Shop