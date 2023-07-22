import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {CatContainer, CatItems} from './category.styles'
import {useSelector} from "react-redux";
import {selectCategoryMap} from "../../store/category/category.selector";

function Category() {

    const {cat} = useParams()
    const categories = useSelector(selectCategoryMap)
    //const {categories} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categories && categories[cat])
    const items = products && products.map(item =>
        <ProductCard
           key = {item.id}
           info={item}
        />
    )

    useEffect(()=>{
        setProducts(categories && categories[cat])
    }, [cat, categories])
    return (
        <CatContainer className='category-container'>
            <h2 className='category-title'>
                { cat && cat.toUpperCase()}
            </h2>
            <CatItems className='category-items'>
                {items}
            </CatItems>
        </CatContainer>
    )


}

export default Category