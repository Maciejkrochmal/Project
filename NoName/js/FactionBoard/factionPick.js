import React, {useState, useEffect} from "react";
import {Faction} from "./factionContainer";
import paseImg from "../../database/assets/351029710_orig.jpg";

export const FactionPick = ({newPlayer}) => {
    const API = "http://localhost:3000"
    const [randomId, setRandomId] = useState([])
    const [player, setPlayer] = useState(null)
    const [playerName, setPlayerName] = useState(null)

    const handleRandom = () =>{
        const tmp =[]
        for (let i = 0; i<3; i++){
            if(tmp.length === 0){
                tmp.push(Math.floor(Math.random() * (11 - 1 + 1)) + 1)
            } else {
                let a = Math.floor(Math.random() * (11 - 1 + 1)) + 1
                tmp.includes(a)? tmp.push(Math.floor(Math.random() * (11 - 1 + 1)) + 1) : tmp.push(a)
            }
        }
        setRandomId(tmp)
    }
    const handleAddPlayer = (el, bk) =>{
        newPlayer(bk)
        setPlayer({
            name: playerName,
            faction: el.factionName,
            perc1: el.factionPerc1,
            perc2: el.factionPerc2,
            perc3: el.factionPerc3,
            img: el.img,
            fleet: {
                mothership: el.fleet.mothership,
                warSun: el.fleet.warSun,
                dreadnought: el.fleet.dreadnought,
                carrier: el.fleet.carrier,
                crusier: el.fleet.crusier,
                destroyer: el.fleet.destroyer,
                fighter: el.fleet.fighter,
                infantry: el.fleet.infantry,
                PDS: el.fleet.PDS}
        })

    }
    useEffect(()=>{
        player === null ? console.log('czekam') :
            fetch(`${API}/players`,{
                method: "POST",
                body:JSON.stringify(player),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(check => console.log(check))
    },[player])

    const handleAddNick = (e) =>{
        setPlayerName(e.target.value)

    }

    return(
        <section className="faction-pick-container">
                <img className={"edgebackground"} src={paseImg}/>
            <div className="faction-container">
                <header className="faction-header">
                    <h1>Wybierz frakcje oraz podaj nick/imie gracza</h1>
                    <button onClick={handleAddNick}> Wracam</button>
                </header>
                <div className="faction-player">
                    <h1>Nick gracza</h1>
                    <input type="text" placeholder="Podaj nick" onChange={handleAddNick}/>

                </div>
                {randomId.length === 0 ?
                <div className="faction-draw">
                    <button type="button" onClick={handleRandom}> Wylosuj frakcje</button>
                </div> :
                <div className="faction-details">
                    {randomId?.map((el, i) =><Faction key={i} id={el} pick={handleAddPlayer}/>)}
                </div>}
            </div>
        </section>
    )
}

//{factions.map(el =>
//                     <Faction
//                         key={el.factionId}
//                         name={el.factionName}
//                         perc={el.factionPerc1}
//                         perc2={el.factionPerc2}
//                         fleet={el.fleet}
//                         img={el.img}
//                     />)}