
import React, {useState, useEffect} from "react";
import MonsterCard from "./MonsterCard";

function MovieCard({movie, director, deleteMovie, onUpdateMovie}) {
    const [monsters, setMonsters] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movie.id}/monsters`)
        .then((r) => r.json())
        .then((monsterData) => setMonsters(monsterData))
    }, [])
 
    const monsterList = monsters.map((monster) => <MonsterCard monster = {monster} />)

    function handleDelete(){
        fetch(`http://localhost:9292/movies/${movie.id}`, { method: "Delete" })
        deleteMovie(movie.id)
    }

    function setWatched() {
        fetch(`http://localhost:9292/movies/${movie.id}`, {
            method: "PATCH",
                  headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            watched: !movie.watched
          }),
        })
        .then((r) => r.json())
        .then((updatedMovie) => {
            console.log(updatedMovie)
            onUpdateMovie(updatedMovie)});
    }

    console.log(movie)
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

            <div>
                <img src={movie.poster_url} width={300} alt={`${movie.title} theater release poster image`}/> 
            </div>
            
            Monsters:
            {monsterList}

            <div>
            Watched?
            <input
            type="checkbox"
            checked={movie.watched}
            onChange={(e) => setWatched(e.target.checked)}
        />
        </div>
            <button onClick={handleDelete}>
                Delete 🗑
            </button>
        </div>
    )
}

export default MovieCard;