import React, {useState, useEffect} from "react";
import {Player} from "./player";
import paseImg from "../../database/assets/351029710_orig.jpg";

export const PlayersBoard = ({newPlayer}) =>{
    const [players, setPlayers] = useState([])
    const API = "http://localhost:3000"

    useEffect(()=>{
        fetch(`${API}/players`)
            .then(resp => resp.json())
            .then(data => setPlayers(data))
    },[])
    const handleAdd = (e) =>{

        newPlayer(1)
    }

    return(
        <section className="main-container">
            <img className={"edgebackground"} src={paseImg}/>
            {players.map(el => <Player key={el.id} img={el.img} name={el.name} faction={el.faction} perc={el.perc1} addButton={handleAdd}/>)}
            <div className="player-container">
                <button className="player-add" onClick={handleAdd}>Add player +</button>
            </div>
        </section>
    )
}