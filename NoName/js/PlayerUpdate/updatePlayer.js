import React, {Component, useEffect, useState, useContext} from "react";
import {TestContext} from "../app";
const API = "http://localhost:3000"


export const PlayerUpdate = () =>{
    const [faction, setFaction] = useState([])

    const {testy, setTesty} = useContext(TestContext)


    useEffect(()=>{
        fetch(`${API}/players/${testy}`)
            .then(resp => resp.json())
            .then(data => setFaction(data))
    },[])

    return(
        <section>
            <div className="faction-to-pick">
                <div className="faction-pick-img">
                    <img src={faction.img}  className="player-img" alt={{name}} />
                </div>

                <div className="faction-pick-discription">
                    <h1>{faction.factionName}</h1>
                    <div className="faction-pick-perk">{faction.factionPerc1}</div>
                    <div className="faction-pick-perk">{faction.factionPerc2}</div>
                    <div className="faction-pick-perk">{faction.factionPerc3}</div>
                </div>
                {/*<button className="player-edit" onClick={handleClick}> Pick Faction </button>*/}
            </div>
            <div>
                <h1> Your Fleet</h1>
                <div>
                    faction img ?
                </div>
            </div>
        </section>
    )
}