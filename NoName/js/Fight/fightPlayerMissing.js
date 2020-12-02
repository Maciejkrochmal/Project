import React, {useState, useEffect} from "react";
import tmpImg from "../../database/assets/abstract.jpg";

export const FightPlayerMissing = () =>{


    return(
        <>
            <img className={'fight-player-img'} src={tmpImg}/>
            <div className="fight-player-container">
                <h1>Pick Player</h1>
            </div>
        </>
    )
}