import React from "react";

function MonsterCard({monster}){

    return(
        <div key={monster.id}>
            {monster.name}
            <br/>
            <img src = {monster.img_url} width={50} alt="monster image too scary"></img>
        </div>
    )
}

export default MonsterCard;