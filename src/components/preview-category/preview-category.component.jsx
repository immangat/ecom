import {PreviewContainer,Heading,ProductPreviewContainer  } from './preview-category.styles'
import ProductCard from "../product-card/product-card.component";
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categoriesContext";
import {Link} from "react-router-dom";

function returnOnlyFour(products) {
    var array = []
    for (let i = 0; i < 4 && i < products.length; i++) {
        array.push(<ProductCard
            key={products[i].id}
            info={products[i]}
        />)
    }
    return array
}

function CategoryPreview({title}) {
    const {categories} = useContext(CategoriesContext)

    const items = returnOnlyFour(categories[title])
    return (
        <PreviewContainer className='preview-container'>

            <Heading>
                <Link to={`/shop/${title}`}>
                    <span>{title.toUpperCase()}</span>
                </Link>
            </Heading>


            <ProductPreviewContainer className='product-preview-container'>
                {items}
            </ProductPreviewContainer>
        </PreviewContainer>
    )

}

export default CategoryPreview

