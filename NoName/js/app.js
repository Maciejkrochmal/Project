import React, {useState, useEffect, createContext} from "react";
import ReactDOM from "react-dom";
import {PlayersBoard} from "./PlayersBoard";
import {FactionPick} from "./FactionBoard/factionPick";
import {FightPreparation} from "./Fight/fightPreparation";
import {Nav} from "./nav";
import {PlayerUpdate} from "./PlayerUpdate/updatePlayer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const TestContext = React.createContext()

const App = () => {

    const [testy, setTesty] = useState(null)


return (
    <Router>
        <Nav/>
        <TestContext.Provider value={{testy, setTesty}}>
        <Route path="/" exact component={PlayersBoard}/>
        <Route path="/EditPlayer" component={PlayerUpdate}/>
        </TestContext.Provider>
        <Route path="/Fight" component={FightPreparation}/>
        <Route path="/FactionPick" component={FactionPick}/>
    </Router>
)
}


ReactDOM.render(<App/>, document.getElementById("app"));


   // return index === 0?(<PlayersBoard newPlayer={handleAdd}/>):(<FactionPick newPlayer={handleAdd}/>)