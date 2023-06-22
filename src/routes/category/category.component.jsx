import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../contexts/categoriesContext";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss'

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
        <div className='category-container'>
            <h2 className='category-title'>
                {category.toUpperCase()}
            </h2>
            <div className='category-items'>
                {items}
            </div>
        </div>
    )


}

export default Category