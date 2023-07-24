import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORY_ACTION_TYPES} from "./category.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const setCategory = (categories) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categories)


export const fetchCategoriesSuccess =
    (catArray) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, catArray)


export const fetchCategoriesFailed =
    (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, error)

export const fetchCategoriesStart =
    () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START)


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const catArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(catArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}



