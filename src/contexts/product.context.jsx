import {createContext, useEffect, useState} from "react";
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext(
    {
        products : null,
        setProducts : () => null
    }
)

function ProductProvider({children}){

    const[products, setProducts] = useState(null)
    const value = {products, setProducts}
    useEffect(() => {
            setProducts(SHOP_DATA)
        }
    , [])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}

export default ProductProvider