import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Calculator from "./components/Calculator/Calculator";
import Voting from "./components/Voting/Voting";
import Show from "./components/Calculator/Show";
import Hide from "./components/Calculator/Hide";
import Home from "./components/Home/Home";
import BuildEncounter from "./components/BuildEncounter/BuildEncounter";
import MyEncounters from "./components/MyEncounters/MyEncounters";
import BattleScreen from "./components/MyEncounters/BattleScreen";
import SubmitHomeBrew from "./components/SubmitHomeBrew/SubmitHomeBrew";
import Login from "./components/Login/Login";
import "./App.css";
import { LoginContext } from "./components/store/login-context";
function App() {
  const [onscreen, statusCheck] = useState(false);

  const calcStatusCheck = (status) => {
    statusCheck(status);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);


  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid)
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null)
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/build_encounter" element={<BuildEncounter />} />
        <Route path="/submit_homebrew" element={<SubmitHomeBrew />} />
        <Route path="/my_encounters" element={<MyEncounters />} />
        <Route path="/battle_scr/:id" element={<BattleScreen />} />
      </React.Fragment>
    );
  } else {
    routes = (<Route path="/" element={<Login />} />);
  }
  return (
    <LoginContext.Provider
      value={{ isLoggedIn: isLoggedIn,userId:userId, login: login, logout: logout }}
    >
      <div className="box_divider">
        <Navigation />

          {onscreen === true ? (
            <>
              <Calculator />
              <Hide onHide={calcStatusCheck} />
            </>
          ) : (
            isLoggedIn && <Show onShow={calcStatusCheck} />
          )}

          <Routes>
            {routes}
          </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
