import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

function Directory({categories}) {

    const cards = categories.map(category =>
        <CategoryItem
            key={category.id}
            category={category}
        />
    )

    return (

        <div className="container">

            {cards}


        </div>

    )
}

export default Directory