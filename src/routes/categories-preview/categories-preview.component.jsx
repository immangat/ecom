import './categories-preview.styles.scss'
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categoriesContext";
import PreviewCategoryComponent from "../../components/preview-category/preview-category.component";

function CategoriesPreview() {

    const {categories} = useContext(CategoriesContext)


    const products = categories ? Object.keys(categories).map(title =>
        <div className='shop-container'>
            <PreviewCategoryComponent
                title={title}
                key={title}
            />

        </div>
    ) : ''
    return (
        <>
            {products}
        </>
    )


}

export default CategoriesPreview