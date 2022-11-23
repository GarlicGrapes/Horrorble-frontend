import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import {Routes, Route} from "react-router-dom";
import NewMovieForm from './NewMovieForm';

function App() {

  const [movies, setMovies] = useState([])
  const [directors, setDirectors] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/directors")
    .then((r) => r.json())
    .then((directorData) => setDirectors(directorData))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((movieData) => setMovies(movieData))
  }, [])


  function addMovie(newMovie) {
    setMovies([...movies, newMovie])
  }

  function removeMovie(id) {
    const updatedMovies = movies.filter(movie => movie.id !== id)
    setMovies(updatedMovies)
  }
  

  return (
    <div className="App">
      <header>
      <NavBar />
      
      <Routes>

      <Route exact path="/addmovie" element = {
         <NewMovieForm
         directors = {directors}
         addMovie = {addMovie}
         />
      }>

      </Route>

      <Route exact path="/adddirector">
        {/* <NewDirectorForm
       /> */}
      </Route>

      <Route exact path="/" element= {
        <HomePage
         movies={movies}
         directors={directors}
         deleteMovie={removeMovie}
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
