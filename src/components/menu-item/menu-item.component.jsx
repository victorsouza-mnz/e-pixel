import React from "react";
import './menu-item.styles.scss'
import { withRouter } from "react-router";

const MenuItem = ({title, imageUrl, linkUrl, size, history, match}) => {
    console.log(imageUrl)
    return (
        <div
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
        className={`menu-item ${size}`}>
            <div 
            style={{backgroundImage: `url(${imageUrl})`}}
            className="background-image" />
            <div className="content">
                <h1 className="title">
                    {title.toUpperCase()}
                </h1>
                <span className="subtitle">SEE MORE</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)