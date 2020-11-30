import React, {useState, useEffect} from "react";

export const ShipList = ({fleet, dmg}) =>{
    const [ships, setShips] = useState(fleet)
    const handleClick = e =>{
        const ship = e.target.name
        setShips(prev =>({
            ...prev,
            [ship]: prev.[ship]-1
        }))
        dmg(1, ships)
    }

    useEffect(()=>{
        setShips(fleet)

    },[fleet])

    return(
        <ul>
            {ships?.mothership !== 0 ? <li>Mothership {ships?.mothership}: </li> : null}
            {ships?.warSun !== 0 ? <li>War Sun {ships?.warSun}: </li> : null}
            {ships?.dreadnought !== 0 ?<li>Drednought {ships?.dreadnought}: </li> : null}
            {ships?.carrier !== 0 ? <li>Carrierr {ships?.carrier}:</li> : null}
            {ships?.fighter !== 0 ? <li>Fighter {ships?.fighter}: </li> : null}
            {ships?.crusier !== 0 ? <li>Crusier {ships?.crusier}: </li> : null}
            {ships?.destroyer !== 0 ? <li>Destroyer {ships?.destroyer}:</li> : null}
            {ships?.infantry !== 0 ? <li>Infantry {ships?.infantry}: </li> : null}
            {ships?.PDS !== 0 ? <li>PDS {ships?.PDS}: </li> : null}
        </ul>
    )
}