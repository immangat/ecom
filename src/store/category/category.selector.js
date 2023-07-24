import {createSelector} from "reselect";


const selectCategoryReducer = (state) => state.category

const selectCategory = createSelector(
    [selectCategoryReducer],
    (categoryObject) => categoryObject.categories
)



export const selectCategoryMap = createSelector(
    [selectCategory],
    (categories) => categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items
        return acc
    },{}
))

export const selectIsLoading = createSelector(

    [selectCategoryReducer],
    (cat) => cat.isLoading
)