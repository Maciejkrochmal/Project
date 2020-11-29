import React, {useState, useEffect} from "react";
import {ShipList} from "./shipList";
const API = "http://localhost:3000"

export const FightLogic = ({playerOne}) =>{
    const [fleetOne, setFleetOne] = useState()
    const [playOneCount, setPlayOneCount] = useState({
        success:0,
        miss:0
    })

    useEffect(()=>{
        fetch(`${API}/fightData/1`)
            .then(res=>res.json())
            .then(data => setFleetOne(data))

    },[])

    const playerSuccess = () =>{
       if(playerOne === null){
           console.log('Brak')
       } else {

        const fleetData = playerOne?.fleet
        const fleetNames = Object.getOwnPropertyNames(fleetData)

        for(let i = 0; i<fleetNames.length; i++){
             for(let j = 0; j<fleetOne.[fleetNames[i]]; j++){
                let ship = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                ship >= fleetData.[fleetNames[i]] ?
                    setPlayOneCount(prev => ({...prev, success: prev.success+1}))
                    :
                    setPlayOneCount(prev => ({...prev, miss: prev.miss+1}))
            }
        }
       }
    }

    return(
        <div className="fight-player-war-log">
            <h1> Player one trafil {playOneCount.success} oraz nie trafil {playOneCount.miss}</h1>
            <button onClick={playerSuccess}> Tmp button fight</button>
            {playerOne !== null ? <ShipList fleet={fleetOne}/> : null}
        </div>
    )
}

// vs
// <h2>  {playerTwo !== null ? pvp.playerTwo.name : "Gracz"}</h2>

