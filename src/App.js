import React, { useState } from "react";
import {Route,Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Calculator from "./components/Calculator/Calculator";
import Voting from "./components/Voting/Voting";
import Show from "./components/Calculator/Show";
import Hide from "./components/Calculator/Hide";
import Home from "./components/Home/Home";
import BuildEncounter from "./components/BuildEncounter/BuildEncounter"
import MyEncounters from "./components/MyEncounters/MyEncounters";
import BattleScreen from "./components/MyEncounters/BattleScreen";
import SubmitHomeBrew from "./components/SubmitHomeBrew/SubmitHomeBrew";
import "./App.css"
function App() {
  const [onscreen, statusCheck] = useState(false);

  const calcStatusCheck = (status) => {
    statusCheck(status);
  };
  // const url = window.location.href;
  return (
    <div className="box_divider">
        <Navigation />
      <div>
        {onscreen === true ? (
          <>
            <Calculator />
            <Hide onHide={calcStatusCheck} />
          </>
        ) : (
          <Show onShow={calcStatusCheck} />
        )}

          <Routes>
            <Route path="/" element = { <Home />}/>
            <Route path="/voting" element = { <Voting />}/>
            <Route path="/build_encounter" element = { <BuildEncounter />}/>
            <Route path="/submit_homebrew" element = { <SubmitHomeBrew/>}/>
            <Route path="/my_encounters" element = { <MyEncounters />}/>
            <Route path="/battle_scr" element = { <BattleScreen />}/>


          </Routes>
       
      </div>
    </div>
  );
}

export default App;
