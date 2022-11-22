import React, {useState} from "react";

function NewMovieForm({addMovie, directors}) {

    const blankMovieForm = {
        "title": "",
        "release_year": 0,
        "director_id": 0
    }

    const [movieFormData, setMovieFormData] = useState(blankMovieForm)

    const directorsMap = directors.map((director) => {
        
        return <option key={director.id} value={director.id}>{director.name}</option>
    })



    function handleMovieChange(e) {
        const key = e.target.id
        console.log(e.target.id)
        setMovieFormData({
            ...movieFormData,
            [key]: e.target.value
        })
        console.log(movieFormData)
    }

   
    function handleNewMovieSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(movieFormData),
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            addMovie(data)
            setMovieFormData(blankMovieForm)
        })

    }

    return(
        <form onSubmit={handleNewMovieSubmit} sx={{minWidth: 250}} variant="filled">
            <h2>Add a Movie</h2>

            <label>Title </label>        
            <input
                type="text"
                id="release_year"
                value={movieFormData.title}
                onChange= {handleMovieChange}
            />

            <br/>

            <label>Release Year </label>        
            <input
                type="integer"
                id="movieName"
                value={movieFormData.release_year}
                onChange= {handleMovieChange}
            />

            <br/>

            <label>Director </label>

            <select sx={{minWidth: 250}} class="dropdown" id="director_id" value={movieFormData.director_id} onChange={(e) => handleMovieChange(e)} >
                {directorsMap}
            </select>

            <br/>

            <input type="submit" value="Add Movie" />

        </form>
    )
}

export default NewMovieForm;