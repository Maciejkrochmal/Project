import React, {useState, useEffect} from "react";

export const ShipList = ({fleet}) =>{
    const [ships, setShips] = useState(fleet)

    const tmpObj = {
        PDS: 0,
        carrier: 0,
        crusier: 0,
        destroyer: 0,
        dreadnought: 5,
        fighter: 0,
        id: 2,
        infantry: 4,
        mothership: 0,
        name: "Player 2",
        warSun: 0
    }

    const handleClick = e =>{
        const ship = e.target.name
        setShips(prev =>({
            ...prev,
            [ship]: prev.[ship]-1
        }))
    }

   console.log(ships)

    return(
        <ul>
            {ships?.mothership !== 0 ? <li>Mothership {ships?.mothership}: <button onClick={handleClick} name={"mothership"}> - </button></li> : null}
            {ships?.warSun !== 0 ? <li>War Sun {ships?.warSun}: <button onClick={handleClick} name={"warSun"}> - </button></li> : null}
            {ships?.dreadnought !== 0 ?<li>Drednought {ships?.dreadnought}: <button onClick={handleClick} name={"dreadnought"}> - </button></li> : null}
            {ships?.carrier !== 0 ? <li>Carrierr {ships?.carrier}: <button onClick={handleClick} name={"carrier"}> - </button></li> : null}
            {ships?.fighter !== 0 ? <li>Fighter {ships?.fighter}: <button onClick={handleClick} name={"fighter"}> - </button></li> : null}
            {ships?.crusier !== 0 ? <li>Crusier {ships?.crusier}: <button onClick={handleClick} name={"crusier"}> - </button></li> : null}
            {ships?.destroyer !== 0 ? <li>Destroyer {ships?.destroyer}:<button onClick={handleClick} name={"destroyer"}> - </button></li> : null}
            {ships?.infantry !== 0 ? <li>Infantry {ships?.infantry}: <button onClick={handleClick} name={"infantry"}> - </button></li> : null}
            {ships?.PDS !== 0 ? <li>PDS {ships?.PDS}: <button onClick={handleClick} name={"PDS"}> - </button></li> : null}
        </ul>
    )
}