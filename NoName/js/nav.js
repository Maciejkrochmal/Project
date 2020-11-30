import React, {useState, useEffect} from "react";

export const Nav = ({navJump}) =>{

    const handleHome = (e) =>{
        console.log(e.target.value)
        navJump(e.target.value)
    }

    return(
        <>
            <header className='nav-bar'>
                <ul className='nav-bar'>
                    <li className="nav-bar-btn" onClick={handleHome} value={0}>Home</li>
                    <li className="nav-bar-btn" onClick={handleHome} value={2}>Fight</li>
                    <li className="nav-bar-btn" onClick={handleHome} value={1}>Pick User</li>
                </ul>
            </header>
        </>
    )
}