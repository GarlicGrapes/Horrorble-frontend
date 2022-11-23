import React, {useState} from "react";
import MovieCard from "./MovieCard";

function HomePage({movies, directors}) {
    // console.log(movies[0].id)
    const MoviesList = movies.map(movie => {
        const director = directors.find(dir => dir.id === movie.director_id)

        return(
            <div>
            <MovieCard
                key = {movie.title}
                movie = {movie}
                director = {director}
            />  
            </div>
        )})



return(
    <div>
        <h1>This is Horrorble!</h1>
        {MoviesList}
    </div>
)}

export default HomePage;