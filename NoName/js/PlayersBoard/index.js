import React, {useState, useEffect, useContext} from "react";
import {Player} from "./player";
import paseImg from "../../database/assets/351029710_orig.jpg";
import {Link} from "react-router-dom";

export const PlayersBoard = () =>{
    const [players, setPlayers] = useState([])
    const API = "http://localhost:3000"

    useEffect(()=>{
        fetch(`${API}/players`)
            .then(resp => resp.json())
            .then(data => setPlayers(data))
    },[])


    return(
        <section className="main-container">
            <img className={"edgebackground"} src={paseImg}/>
            {players.map(el => <Player key={el.id} img={el.img} name={el.name} id={el.id} faction={el.faction} perc={el.perc1} />)}
            {players.length < 6 ? <div className="player-container">
                    <Link to="/FactionPick" href="#" className="animated-button1" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        New Player
                    </Link>
            </div>
            :null}
        </section>
    )
}