import {useContext} from "react";
import {ProductContext} from "../../contexts/product.context";

function Shop(){

    const {products} = useContext(ProductContext)

    const product = products? products.map(product => <h2 key={product.id}> {product.name}</h2>) : ''
    return(
        <div>
            {product}
        </div>
    )


}

export default Shop