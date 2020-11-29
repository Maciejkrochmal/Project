import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {PlayersBoard} from "./PlayersBoard";
import {FactionPick} from "./FactionBoard/factionPick";
import {FightPreparation} from "./Fight/fightPreparation";


const App = () => {
    const [index, setIndex] = useState(0)

    const handleAdd = (e) => {
        setIndex(1)
    }

return (
    <FightPreparation/>
)
}


ReactDOM.render(<App/>, document.getElementById("app"));


//    return index === 0?(<PlayersBoard newPlayer={handleAdd}/>):(<FactionPick newPlayer={handleAdd}/>)