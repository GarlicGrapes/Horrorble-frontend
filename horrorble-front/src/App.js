import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { recomposeColor } from '@mui/material';
import NavBar from './NavBar';
import HomePage from './HomePage';
import {Routes, Route} from "react-router-dom";

function App() {

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((movieData) => setMovies(movieData))
  }, [])

  return (
    <div className="App">
      <header>
      <NavBar />
      
      <Routes>

      <Route exact path="/addmovie">
        {/* <NewMovieForm
         /> */}
      </Route>

      <Route exact path="/adddirector">
        {/* <NewDirectorForm
       /> */}
      </Route>

      <Route exact path="/" element= {
        <HomePage
         movies={movies}
        />
      }>

      </Route>

      </Routes>

      </header>

{/* <p>
  {movies.map(movie => movie.title + " ")}
</p> */}
    </div>
  );
}

export default App;
