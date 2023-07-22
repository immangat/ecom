

import PreviewCategoryComponent from "../../components/preview-category/preview-category.component";
import {useSelector} from "react-redux";
import {selectCategoryMap} from "../../store/category/category.selector";

function CategoriesPreview() {

    //const {categories} = useContext(CategoriesContext)
    const categories = useSelector(selectCategoryMap)

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