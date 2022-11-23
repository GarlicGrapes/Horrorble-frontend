import React from "react";


function MovieCard({movie, director}) {

    return(
        <div className="MovieCard">
            <div>
                {movie.title}

            </div>
            <div>
                {movie.release_year}
            </div>
            <div>
                {director.name}
            </div>
        </div>
    )
}

export default MovieCard;