import React, {Component, useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import {TestContext} from "../app";

export const Player = ({name, img, faction, perc, id, editButton}) => {
    const {testy, setTesty} = useContext(TestContext)

    return name != null? (
        <div className="player-container">
            <div className="">
                <img className='player-img' src={img}/>
            </div>
            <div className='player-discription'>
                <h1 className="player-name">{name}</h1>
                <h1 className="player-race">{faction}</h1>
                <p className="player-perk">{perc}</p>
            </div>
            <Link className="button-fight-click" to="/EditPlayer" onClick={()=>setTesty(id)} > Edycja lol </Link>
        </div>
    ) : null
}