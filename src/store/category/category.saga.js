import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./category.action";
import {takeLatest, all, call, put} from 'redux-saga/effects'
import {CATEGORY_ACTION_TYPES} from "./category.types";
export const fetchCategoriesAsync1 = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const catArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(catArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}


export function* fetchCategoriesAsync(){
    try {
        const catArray = yield call(getCategoriesAndDocuments, 'categories')
        yield put(fetchCategoriesSuccess(catArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}
export function* onFetchCategories(){
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])

}