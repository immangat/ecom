import React from "react";
import {Card, BackgroundImageContainer, CardText, H2, Paragraph} from './category-item.styles'
import {useNavigate} from "react-router-dom";
function CategoryItem({category}){

    const navigate = useNavigate()

    function onNavigateHandler(){
        navigate(category.route)
    }
    return(
        <Card onClick ={onNavigateHandler}>
            <BackgroundImageContainer className="background-image" imageurl = {category.imageUrl}/>
            <CardText className="card--text">
                <H2>{category.title}</H2>
                <Paragraph> Shop now</Paragraph>
            </CardText>
        </Card>
    )
}


export default CategoryItem