import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'

export const Main = ({details}) => {

    return (
        <div className='DetailsContainer'>
            <h2 className='DetailsTitle'>{details.title}</h2>
            <img src={details.multimedia[0].url} className='DetailsImg'/>
            <h3 className='DetailsByline'>{details.byline}</h3>
            <p>{details.abstract}</p>
            <p>Published: {details.published_date}</p>
            <p><a href={details.url}>Click</a>For More Information</p>
        </div>
    )
}
