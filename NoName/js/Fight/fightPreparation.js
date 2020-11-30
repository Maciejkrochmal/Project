import React, {useState, useEffect} from "react";
import {FightPlayerDetails} from "./fightPlayerDetails";
import {FightPlayerMissing} from "./fightPlayerMissing";
import {FightForm} from "./fightForm";
import {FightLogic} from "./fightLogic";

export const FightPreparation = () => {
    const API = "http://localhost:3000"
    const [players, setPlayers] = useState([])
    const [pvp, setPvp] = useState( {
        playerOne:null,
        playerTwo:null
    })
    const [pvp1, setPvp1] = useState( {
        playerOne1:null,
        playerTwo1:null
    })
    useEffect(()=>{
        fetch(`${API}/players/`)
            .then(resp => resp.json())
            .then(data => setPlayers(data))
    },[])

    const handleOnChange = e => {
        e.target.className += "hidden"
        const side = e.target.name
        const el = e.target.value
        const player = players[el-1]

        side === "playerOne" ?
            setPvp(prev =>({
                ...prev,
                playerOne: player
            }))
            :
            setPvp(prev =>({
                ...prev,
                playerTwo: player
            }))
    }

        const handleUpdatePVP = (atr) =>{
            atr.name === pvp.playerOne.name?
            setPvp1(prev =>({
                ...prev,
                playerOne1: atr
            }))
                :
                setPvp1(prev =>({
                    ...prev,
                    playerTwo1: atr
                }))
        }

    return(
        <section className="fight-container">
            <div>
            <div className="fight-player">

                    {pvp.playerOne === null ?
                        <FightPlayerMissing/>
                        :
                        <FightPlayerDetails playerOne={pvp.playerOne}/>
                    }
                    <select onChange={handleOnChange} name={"playerOne"}>
                        <option value="">Select One …</option>
                        {players.map(el =><option key={el.id} value={el.id}>{el.name}</option> )}
                    </select>

                {pvp.playerOne != null ? <FightForm playerOne={pvp.playerOne} syb={handleUpdatePVP}/> : null}
            </div>

            <div className="fight-player">

                    {pvp.playerTwo === null ?
                        <FightPlayerMissing/>
                        :
                        <FightPlayerDetails playerOne={pvp.playerTwo}/>
                    }
                    <select onChange={handleOnChange} name={"playerTwo"}>
                        <option value="">Select One …</option>
                        {players.map(el =><option key={el.id} value={el.id}>{el.name}</option> )}
                    </select>
                <div className="fight-player-container-form">
                    {pvp.playerTwo !== null ? <FightForm playerTwo={pvp.playerTwo} syb={handleUpdatePVP}/> : null}
                </div>
            </div>
            </div>
            <div className="fight-player-war-container">
                <h1>Combat Log!</h1>
                {pvp1.playerOne1 !== null?
                    <FightLogic playerOne={pvp1.playerOne1} pOne={pvp.playerOne}/>
                    :null}
                {pvp1.playerTwo1 !== null?
                    <FightLogic playerTwo={pvp1.playerTwo1} pTwo={pvp.playerTwo}/>
                    :null}
            </div>
        </section>
    )
}