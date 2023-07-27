import {Routes, Route} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import { fetchCategoriesStart} from "../../store/category/category.action";
import {useDispatch} from "react-redux";
function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    },[])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path =':cat' element={<Category />}/>
        </Routes>
    )


}

export default Shop