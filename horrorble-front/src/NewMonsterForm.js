import React, {useState} from "react";

function NewMonsterForm({movies}) {

    // const firstDirectorId = directors[0].id
    // console.log(firstDirectorId)

    const blankMonsterForm = {
        "name": "",
        "img_url": "",
        "movie_id": 0
    }

    const [monsterFormData, setMonsterFormData] = useState(blankMonsterForm)

    const moviesMap = movies.map((movie) => {
        return <option key={movie.id} value={movie.id}>{movie.title}</option>
    })



    function handleMonsterChange(e) {
        const key = e.target.id
        console.log(e.target.id)
        setMonsterFormData({
            ...monsterFormData,
            [key]: e.target.value
        })
        // console.log(monsterFormData)
    }

   
    function handleNewMonsterSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/monsters", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(monsterFormData),
        })
        .then((r) => r.json())
        .then((data) => {
            addMonster(data)
            setMonsterFormData(blankMonsterForm)
        })

    }

    return(
        <form onSubmit={handleNewMonsterSubmit} variant="filled">
            <h2>Add a Monster 👹</h2>

            <label>Name </label>        
            <input
                type="text"
                id="name"
                value={monsterFormData.name}
                onChange= {handleMonsterChange}
            />


            <br/>


            <label>
            Monster Image URL </label>        
            <input
                type="text"
                id="img_url"
                value={monsterFormData.img_url}
                onChange= {handleMonsterChange}
            />

            <br/>

            <select className="dropdown" id="movie_id" value={monsterFormData.movie_id} onChange={(e) => handleMovieChange(e)} >
                {moviesMap}
            </select>

            <br/>

            <input type="submit" value="Add Monster" />

        </form>
    )
}

export default NewMonsterForm;