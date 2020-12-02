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
    console.log(players.length)
    return(
        <section className="main-container">
            <img className={"edgebackground"} src={paseImg}/>
            {players.map(el => <Player key={el.id} img={el.img} name={el.name} faction={el.faction} perc={el.perc1} addButton={handleAdd}/>)}
            {players.length < 6 ? <div className="player-container">
                    <a href="#" className="animated-button1" onClick={handleAdd}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        New Player
                    </a>
            </div>
            :null}
        </section>
    )
}