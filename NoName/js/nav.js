import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Nav = () =>{
    return(
        <>
            <header className='nav-bar'>
                <ul className='nav-bar'>
                    <Link className="nav-bar-btn" to="/">Home</Link>
                    <Link className="nav-bar-btn" to="/Fight">Fight</Link>
                    <Link className="nav-bar-btn" to="/FactionPick">Pick User</Link>
                </ul>
            </header>
        </>
    )
}