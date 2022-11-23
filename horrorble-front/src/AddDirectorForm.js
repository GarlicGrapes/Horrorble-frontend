import React, {useState} from "react";

function NewDirectorForm({addDirector}) {

    const blankDirectorForm = {
        "name": ""
    }

    const [directorFormData, setDirectorFormData] = useState(blankDirectorForm)

    function handleDirectorChange(e) {
        const key = e.target.id
        console.log(e.target.id)
        setDirectorFormData({
            ...directorFormData,
            [key]: e.target.value
        })
    }

   
    function handleNewDirectorSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/directors", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(directorFormData),
        })
        .then((r) => r.json())
        .then((data) => {
            addDirector(data)
            setDirectorFormData(blankDirectorForm)
        })

    }

    return(
        <form onSubmit={handleNewDirectorSubmit} variant="filled">
            <h2>Add a Director</h2>

            <label>Name </label>        
            <input
                type="text"
                id="name"
                value={directorFormData.name}
                onChange= {handleDirectorChange}
            />

            <input type="submit" value="Add Director"/>

        </form>
    )
}

export default NewDirectorForm;