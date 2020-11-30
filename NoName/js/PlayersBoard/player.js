import React, {Component, useEffect, useState} from "react";




export const Player = ({name, img, faction, perc, addButton}) => {

    const handleClick = e => () => {
        addButton(1)
    }

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
        </div>
    ) : null
}