import React, {Component, useEffect, useState, useContext} from "react";
import {TestContext} from "../app";
const API = "http://localhost:3000"


export const PlayerUpdate = () =>{
    const [faction, setFaction] = useState([])
    const [updates, setUpdates] = useState([])
    const [unit, setUnit] = useState()

    const {testy, setTesty} = useContext(TestContext)


    useEffect(()=>{
        fetch(`${API}/players/${testy}`) //${testy}
            .then(resp => resp.json())
            .then(data => setFaction(data))

        fetch(`${API}/updates/`)
            .then(resp => resp.json())
            .then(data => setUpdates(data))
    },[])
    useEffect(()=>{
        if(unit !== undefined){
            const {id,name,ship,data} = unit? unit : 1
            console.log(ship)
            setFaction(prevState =>({
                ...prevState,
                fleet: {...prevState.fleet,
                    [ship]: data}
            }))
        }
    },[unit])


    const handleUpdateChange = (e) =>{
        let id = e.target.value -1
        setUnit(updates[id])
    }
    const handlePushUpdate = () =>{
        fetch(`${API}/players/${testy}`,{
            method: "PUT",
            body:JSON.stringify(faction),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(check => console.log(check))
    }

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
                <button className="player-edit" onClick={handlePushUpdate}> Update </button>
            </div>
            <div>
                <h1> Your Fleet</h1>
                <div className="fight-player-container">
                    <h1>{faction?.name}</h1>
                    <h1> {faction?.faction} </h1>
                    <p> Ship : Success</p>
                    <p>Mothership: {faction.fleet?.mothership},</p>
                    <p>War Sun : {faction.fleet?.warSun},</p>
                    <p>Dreadnought : {faction.fleet?.dreadnought},</p>
                    <p>Carrier : {faction.fleet?.carrier},</p>
                    <p>Crusier : {faction.fleet?.crusier},</p>
                    <p>Destroyer : {faction.fleet?.destroyer},</p>
                    <p>Fighter : {faction.fleet?.fighter },</p>
                    <p>Infantry : {faction.fleet?.infantry},</p>
                    <p>PDS : {faction.fleet?.PDS},</p>
                </div>
                <select onChange={handleUpdateChange} name={"playerOne"}>
                    <option value="">Select One …</option>
                    {updates.map(el =><option key={el.id} value={el.id}>{el.name}</option> )}
                </select>

            </div>
        </section>
    )
}