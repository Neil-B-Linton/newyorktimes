import React, {useState, useEffect} from 'react';
import MainContainer from '../main/MainContainer';
import Loading from '../loading/Loading'
import './HomeScreen.css';

export const HomeScreen = ({random, loading}) => {

    const filterArr = random.filter(element => element.title)
    const randomArr = filterArr.map((element, index) => {
        console.log(element)
        return (
        <MainContainer 
        id={element.title} 
        key={index} 
        title={element.title}
        section={element.section} 
        abstract={element.abstract}
        published={element.published_date} 
        author={element.byline}
        url={element.url}
        />
        )
    })



    return (    
        <div className="Homescreen">
           {loading ? <Loading /> : randomArr}
        </div>
    )
}
