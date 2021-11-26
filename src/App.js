/*
useEffect to load API
  API call in useEffect on page render
  map results to display all ul of images
  html to display the movies on screen
Save API data to state
import axios?
Import pieces of the Router library?
Use browserroute to go to movie detail?
*/

// NPM Modules
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
//  Components
import Catalogue from "./components/Catalogue"
import MovieDetails from './components/MovieDetails';


const apiKey = "bfb23e9c017a2be83f91472023334cb6"
// const apiKey = "f012df5d63927931e82fe659a8aaa3ac"

const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: `${apiKey}`,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      },
    }).then((results) => {
      const movieResults = results.data.results;
      // console.log(movieResults)
      setMovies(movieResults);

      // Store the API results to the "movies" state value...
    })
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <header>
          <Link to="/" style={{textDecoration: "none"}}>
            <h1>HackFlix</h1>
          </Link>
        </header>

        <Routes>
          {/* Passing the state of movies that we mapped the results of the API call to into the Catalogue component */}
          {/* We use / so that way it's rendered inside of the component. Anything outside of the routes is rendered on all of the pages */}
          <Route path="/" element={<Catalogue movies={movies} />} />
          <Route path="movie/:movieID" element={<MovieDetails />} />
        </Routes>




      </div>
    </Router>
  );
}

export default App;

