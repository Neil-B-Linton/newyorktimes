import React, {useState, useEffect} from 'react'
import { NavBar } from '../nav/NavBar'
import { Main } from '../main/Main'
import { Error } from '../error/Error'
import { HomeScreen } from '../homescreen/HomeScreen'
import { Route, Switch } from 'react-router-dom'
import { getTopStories } from '../../utils/apiCalls'
import { Topics } from '../../utils/Topics'
import './App.css';


export const App = () => {
  const [option, setOption] = useState('');
  const [random, setRandom] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

    function findRandomTopic(array) {
      return Math.floor(Math.random() * array.length);
    }

    function setRandomTopic(Topics) {
      return findRandomTopic(Topics)
    }

    function sortRandomTopic(Topics) {
     return Topics[setRandomTopic(Topics)]
    }

    useEffect(() => {

        getTopStories(sortRandomTopic(Topics))
        .then(results => {
          setRandom(results.results)
          setLoading(false)
        })
        .catch(error => {
          setError(error.message)
        })
        console.log(random)

    }, [])

    function handleChange(event) {
      setOption(event.target.value) 
      getTopStories(event.target.value)
      .then(results => {
        setRandom(results.results)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
      })
    }


  return (
    <div className="App">
      <NavBar handleChange={handleChange}/>
      <Switch>
        <Route exact path='/' render={() => <HomeScreen random={random} loading={loading}/>} />
        <Route exact path='/:id' render={({match}) => {
          let matchingDetails = random.find(element => element.title === match.params.id)
          if (!matchingDetails) {
            return <Error error={error} />
          }
        return <Main details={matchingDetails} /> }} />
      </Switch>
    </div>
  );
}
