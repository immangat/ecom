import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../contexts/categoriesContext";
import ProductCard from "../../components/product-card/product-card.component";
import {CatContainer, CatItems} from './category.styles'

function Category() {

    const {category} = useParams()
    const {categories} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categories[category])
    const items = products && products.map(item =>
        <ProductCard
           key = {item.id}
           info={item}
        />
    )

    useEffect(()=>{
        setProducts(categories[category])
    }, [category, categories])
    return (
        <CatContainer className='category-container'>
            <h2 className='category-title'>
                {category.toUpperCase()}
            </h2>
            <CatItems className='category-items'>
                {items}
            </CatItems>
        </CatContainer>
    )


}

export default Category