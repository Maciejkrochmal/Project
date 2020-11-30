import React, {useState, useEffect} from "react";


export const SuccessLogic = (player, fleet) =>{
    const [count, setCount] = useState({
        success:0,
        miss:0
    })

    if(player === null){
        console.log('Brak')
    } else {

        const fleetData = player?.fleet
        const fleetNames = Object.getOwnPropertyNames(fleetData)

        for(let i = 0; i<fleetNames.length; i++){
            for(let j = 0; j<fleet.[fleetNames[i]]; j++){
                let ship = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                ship >= fleetData.[fleetNames[i]] ?
                    setCount(prev => ({...prev, success: prev.success+1}))
                    :
                    setCount(prev => ({...prev, miss: prev.miss+1}))
            }
        }
    }
    return count
}