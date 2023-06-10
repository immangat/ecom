import React from "react";
import './category-item.styles.scss'
function CategoryItem({category}){


    return(
        <div className="card">
            <div className="background-image" style={{backgroundImage : `url(${category.imageUrl})`}}/>
            <div className="card--text">
                <h2>{category.title}</h2>
                <p> Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem