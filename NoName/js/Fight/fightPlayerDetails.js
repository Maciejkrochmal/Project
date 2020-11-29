import React, {useState, useEffect} from "react";
import tmpImg from "../../database/assets/SAAR.png";

export const FightPlayerDetails = ({playerOne, playerTwo}) =>{


    return(
        <>
            {playerOne === null || playerTwo === null?
                <img className={'fight-player-img'} src={tmpImg}/>
                :
                <img className={'fight-player-img'} src={playerOne?.img || playerTwo?.img}/>
            }
            <div className="fight-player-container">
                <h1>{playerOne?.name || playerTwo?.name}</h1>
                <h1> {playerOne?.faction || playerTwo?.faction} </h1>
                <p> Ship : Success</p>
                <p>Mothership: {playerOne?.fleet.mothership || playerTwo?.fleet.mothership},</p>
                <p>War Sun : {playerOne?.fleet.warSun || playerTwo?.fleet.warSun},</p>
                <p>Dreadnought : {playerOne?.fleet.dreadnought || playerTwo?.fleet.dreadnought},</p>
                <p>Carrier : {playerOne?.fleet.carrier || playerTwo?.fleet.carrier},</p>
                <p>Crusier : {playerOne?.fleet.crusier || playerTwo?.fleet.crusier},</p>
                <p>Destroyer : {playerOne?.fleet.destroyer || playerTwo?.fleet.destroyer},</p>
                <p>Fighter : {playerOne?.fleet.fighter || playerTwo?.fleet.fighter},</p>
                <p>Infantry : {playerOne?.fleet.infantry || playerTwo?.fleet.infantry},</p>
                <p>PDS : {playerOne?.fleet.PDS || playerTwo?.fleet.PDS},</p>
            </div>
        </>
    )
}