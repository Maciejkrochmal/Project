import React, {useState, useEffect} from "react";
import {ShipList} from "./shipList";

export const FightLogic = ({playerOne,pOne, playerTwo,pTwo}) =>{
    const [fleetOne, setFleetOne] = useState(null)
    const [actionCard, setActionCard] = useState(0)
    const [action, setAction] = useState([
        {
            id:1,
            name: "Fighter Prototype",
            desc: "Apply +2 to the result of each of your fighters' combat rolls during this combat round.",
            value: 2
        },
        {
            id:2,
            name: "Morale Boost",
            desc: "At the start of a combat round:",
            value: 1
        }
    ])
    const [playOneCount, setPlayOneCount] = useState({
        success:0,
        miss:0
    })
    const handleChange = (e) =>{
        setActionCard(e.target.value)
    }

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
           if(actionCard >= 2){
               console.log(actionCard)
           }

        const fleetData = pOne?.fleet || pTwo?.fleet
        const fleetNames = Object.getOwnPropertyNames(fleetData)

        for(let i = 0; i<fleetNames.length; i++){
             for(let j = 0; j<fleetOne[fleetNames[i]]; j++){
                 for(let s = 0; s<fleetData[fleetNames[i]][0]; s++){
                     console.log(fleetData[fleetNames[i]][0])
                     let ship = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                     ship + actionCard >= fleetData[fleetNames[i]][1] ?
                         (setPlayOneCount(prev => ({...prev, success: prev.success+1})), console.log(`${fleetNames[i]} trafil ${ship} + ${actionCard}`))
                         :
                         (setPlayOneCount(prev => ({...prev, miss: prev.miss+1})), console.log(`${fleetNames[i]} pudło ${ship}  + ${actionCard}`))
                 }
            }
        }
       }
       setActionCard(0)
    }

    return(
        <div className="fight-player-war-log">
            <button className="myButton" onClick={handleUpdate}> Send Fleet </button>
            <select onChange={handleChange} name={"playerOne"}>
                <option value="">Select One …</option>
                {action.map(el =><option key={el.id} value={el.value}>{el.name}</option> )}
            </select>
            <h1> {playerOne?.name || playerTwo?.name} </h1>
            <p> Shots that reach the target   {playOneCount.success} !</p>
            <p> Shots lost in space  {playOneCount.miss} </p>
            <button className="myButton" onClick={playerSuccess}> Roll the Dice !</button>
            {fleetOne !== null ? <ShipList fleet={fleetOne} dmg={handleDMG}/> : null}
        </div>
    )
}

