import React, {useState, useEffect} from "react";
import {ShipList} from "./shipList";
const API = "http://localhost:3000"

export const FightLogic = ({playerOne,pOne, playerTwo,pTwo}) =>{
    const [fleetOne, setFleetOne] = useState(null)
    const [playOneCount, setPlayOneCount] = useState({
        success:0,
        miss:0
    })

   const handleUpdate = () => {
       setPlayOneCount({
           success:0,
           miss:0
       })
        setFleetOne(playerOne || playerTwo)
   }
    const handleDMG = (dmg, tmp) =>{

        setPlayOneCount(prev => ({...prev, success: prev.success-dmg}))

    }


    const playerSuccess = () =>{
       if(playerOne === null || playerTwo === null){
           console.log('Brak')
       } else {


        const fleetData = pOne?.fleet || pTwo?.fleet
        const fleetNames = Object.getOwnPropertyNames(fleetData)
        for(let i = 0; i<fleetNames.length; i++){
             for(let j = 0; j<fleetOne.[fleetNames[i]]; j++){
                let ship = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                ship >= fleetData.[fleetNames[i]] ?
                    (setPlayOneCount(prev => ({...prev, success: prev.success+1})), console.log(`${fleetNames[i]} trafil ${ship}`))
                    :
                    (setPlayOneCount(prev => ({...prev, miss: prev.miss+1})), console.log(`${fleetNames[i]} pudło ${ship}`))
            }
        }
       }
    }

    return(
        <div className="fight-player-war-log">
            <button onClick={handleUpdate}> Update Data </button>
            <h1> {playerOne?.name || playerTwo?.name} one trafil {playOneCount.success} oraz nie trafil {playOneCount.miss}</h1>
            <button onClick={playerSuccess}> Roll the Dice !</button>
            {fleetOne !== null ? <ShipList fleet={fleetOne} dmg={handleDMG}/> : null}
        </div>
    )
}

