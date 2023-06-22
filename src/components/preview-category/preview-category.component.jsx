import './preview-category.styles.scss'
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
        <div className='preview-container'>

            <h2>
                <Link to={`/shop/${title}`}>
                    <span>{title.toUpperCase()}</span>
                </Link>
            </h2>


            <div className='product-preview-container'>
                {items}
            </div>
        </div>
    )

}

export default CategoryPreview

