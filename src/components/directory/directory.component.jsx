import CategoryItem from "../category-item/category-item.component";
import {Container} from './directory.styles'


function Directory({categories}) {

    const cards = categories.map(category =>
        <CategoryItem
            key={category.id}
            category={category}
        />
    )

    return (

        <Container className="container">

            {cards}


        </Container>

    )
}

export default Directory