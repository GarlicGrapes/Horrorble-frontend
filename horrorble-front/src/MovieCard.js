import React, {useState} from "react";


function MovieCard({movie}) {
    

    return(
        <div className="MovieCard">
            <div>
                {movie.title}
                {/* <button onClick={console.log()}>Movie</button> */}
            </div>
            <div>
                {movie.release_year}
            </div>
        </div>
    )
}

export default MovieCard;