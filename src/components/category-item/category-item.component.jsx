import React from "react";
import {Card, BackgroundImageContainer, CardText, H2, Paragraph} from './category-item.styles'
function CategoryItem({category}){


    return(
        <Card className="card">
            <BackgroundImageContainer className="background-image" imageUrl = {category.imageUrl}/>
            <CardText className="card--text">
                <H2>{category.title}</H2>
                <Paragraph> Shop now</Paragraph>
            </CardText>
        </Card>
    )
}

export default CategoryItem