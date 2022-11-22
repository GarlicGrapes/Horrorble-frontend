import React, {useState} from "react";
import MovieCard from "./MovieCard";

function HomePage({movies}) {

    const MoviesList = movies.map(movie => {
        return(
        <div>
            <MovieCard
                key = {movie.id}
                movie = {movie}
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