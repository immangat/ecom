import {PreviewContainer,Heading,ProductPreviewContainer  } from './preview-category.styles'
import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCategoryMap} from "../../store/category/category.selector";

function returnOnlyFour(products) {
    if(!products) return
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
    const categories = useSelector(selectCategoryMap)

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

