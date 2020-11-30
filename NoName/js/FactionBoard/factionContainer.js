import React, {useState, useEffect} from "react";

export const Faction = ({id, pick}) =>{
    const API = "http://localhost:3000"
    const [faction, setFaction] = useState([])

    useEffect(()=>{
        fetch(`${API}/factions/${id}`)
            .then(resp => resp.json())
            .then(data => setFaction(data))
    },[])

    const handleClick = () =>{
        pick(faction, id)

    }
    return(
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
            <button className="player-edit" onClick={handleClick}> Pick Faction </button>
        </div>
    )
}