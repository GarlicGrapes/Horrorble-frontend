import React from "react";
import MovieCard from "./MovieCard";

function HomePage({movies, directors, deleteMovie, updateMovie}) {

    const MoviesList = movies.map(movie => {
        const director = directors.find(dir => dir.id === movie.director_id)

        return(
            <div key={movie.id}>
            <MovieCard
                movie = {movie}
                director = {director}
                deleteMovie = {deleteMovie}
                onUpdateMovie = {updateMovie}
            />  
            <br/>
            </div>
        )})



return(
    <div>
        <h1>This is Horrorble!</h1>
        {MoviesList}
    </div>
)}

export default HomePage;