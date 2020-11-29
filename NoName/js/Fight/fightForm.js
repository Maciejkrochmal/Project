import React, {useState, useEffect} from "react";

export const FightForm = ({playerOne, playerTwo}) =>{
    const API = "http://localhost:3000"
    const [fleetOne, setFleetOne] = useState({
        name:playerOne?.name || playerTwo?.name,
        mothership: 0,
        warSun: 0,
        dreadnought: 0,
        carrier: 0,
        crusier: 0,
        destroyer: 0,
        fighter: 0,
        infantry: 0,
        PDS: 0
    })
    const handleAddShip = e =>{
        e.preventDefault()
        const ship = e.target.name
        setFleetOne(prev =>({
            ...prev,
            [ship]: prev.[ship]+1
        }))
    }
    const handleSubShip = e =>{
        e.preventDefault()
        const ship = e.target.name
        fleetOne.[ship] === 0 ? null :
        setFleetOne(prev =>({
            ...prev,
            [ship]: prev.[ship]-1
        }))
    }


    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`${API}/fightData/${playerOne?.id || playerTwo?.id}`,{
            method: "PUT",
            body:JSON.stringify(fleetOne),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(check => console.log(check))
    }

    return(
        <form  onSubmit={handleSubmit}>

            <div className="fight-player-container-fleet">
                <h1>Pick your fleet !</h1>
                <p>Mothership : {fleetOne.mothership}</p>
                <button onClick={handleAddShip} name={"mothership"}> + </button>
                <button onClick={handleSubShip} name={"mothership"}> - </button>
                <p>War Sun : {fleetOne.warSun}</p>
                <button onClick={handleAddShip} name={"warSun"}> + </button>
                <button onClick={handleSubShip} name={"warSun"}> - </button>
                <p>Drednought : {fleetOne.dreadnought}</p>
                <button onClick={handleAddShip} name={"dreadnought"}> + </button>
                <button onClick={handleSubShip} name={"dreadnought"}> - </button>
                <p>Carrierr : {fleetOne.carrier}</p>
                <button onClick={handleAddShip} name={"carrier"}> + </button>
                <button onClick={handleSubShip} name={"carrier"}> - </button>
                <p>Fighter : {fleetOne.fighter}</p>
                <button onClick={handleAddShip} name={"fighter"}> + </button>
                <button onClick={handleSubShip} name={"fighter"}> - </button>
                <p>Crusier : {fleetOne.crusier}</p>
                <button onClick={handleAddShip} name={"crusier"}> + </button>
                <button onClick={handleSubShip} name={"crusier"}> - </button>
                <p>Destroyer  : {fleetOne.destroyer}</p>
                <button onClick={handleAddShip} name={"destroyer"}> + </button>
                <button onClick={handleSubShip} name={"destroyer"}> - </button>
                <p>Infantry : {fleetOne.infantry}</p>
                <button onClick={handleAddShip} name={"infantry"}> + </button>
                <button onClick={handleSubShip} name={"infantry"}> - </button>
                <p>PDS : {fleetOne.PDS}</p>
                <button onClick={handleAddShip} name={"PDS"}> + </button>
                <button onClick={handleSubShip} name={"PDS"}> - </button>

            </div>
            <button type={"submit"}> Gotowy !</button>
        </form>
    )
}