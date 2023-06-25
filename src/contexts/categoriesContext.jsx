import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext(
    {
        categories: {},
        setCategories: () => null
    }
)

function CategoriesProvider({children}) {

    const [categories, setCategories] = useState({})
    const value = {categories}
    useEffect(() => {
            async function getCatMap() {
                const catMap = await getCategoriesAndDocuments()
                setCategories(catMap)
            }

            getCatMap()
        }
        , [])


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

}

export default CategoriesProvider