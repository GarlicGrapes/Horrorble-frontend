import React from "react";


function MovieCard({movie, director, deleteMovie}) {

    function handleDelete(){
        fetch(`http://localhost:9292/movies/${movie.id}`, { method: "Delete" })
        deleteMovie(movie.id)
    }



    return(
        <div className="MovieCard" >
            <div>
                {movie.title}

            </div>
            <div>
                {movie.release_year}
            </div>
            <div>
                Directed by: {director.name}
            </div>
            <button onClick={handleDelete}>
                Delete 🗑
            </button>
        </div>
    )
}

export default MovieCard;