import React from 'react'
import { Topics } from '../../utils/Topics'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ({handleChange}) => {

    const findTopics = Topics.map(element => {
        return (<option key={element} value={element}>{element}</option>)
    })

    return (
        <div className="Nav">
            <Link to='/' className='TitleHome'><h1>New York Times</h1></Link>
            <label>
                Select By:
               <select onChange={event => handleChange(event)}>
                    <option>Choose a Value</option>
                    {findTopics}
                </select>
            </label>
        </div>
    )
}
