import {CATEGORY_ACTION_TYPES} from "./category.types";

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}


export const categoryReducer = (state = INITIAL_STATE, action)=> {

    const {type, payload} = action

    switch(type){

        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
            return{
                ...state,
                categories: payload,
                isLoading: false
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state

    }

}