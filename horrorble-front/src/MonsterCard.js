import React from "react";

function MonsterCard({monster}){

    return(
        <div key={monster.id}>
            {monster.name}
        </div>
    )
}

export default MonsterCard;