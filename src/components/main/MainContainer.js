import React from 'react'
import {Link} from 'react-router-dom'
import './MainContainer.css'

export const MainContainer = ({title, section, published, author, url}) => {

    return(
        <Link to={`/${title}`} className="Link">
            <div className="MainContainer">
                <h3>Section: {section}</h3>
                <h2>{title}</h2>
                <h3>Date: {published}</h3>
                <h3>{author}</h3>
            </div>
        </Link>

    )
}

export default MainContainer;