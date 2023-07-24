

import PreviewCategoryComponent from "../../components/preview-category/preview-category.component";
import {useSelector} from "react-redux";
import {selectCategoryMap, selectIsLoading} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.compnent";

function CategoriesPreview() {

    const categories = useSelector(selectCategoryMap)
    const isLoading = useSelector(selectIsLoading)

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
            {
                isLoading ?
                    <div style={{
                        display : "flex",
                        justifyContent: "center",
                        alignContent : "center",
                    }}>
                        <Spinner/>
                    </div>

                    :
                    products
            }

        </>
    )


}

export default CategoriesPreview