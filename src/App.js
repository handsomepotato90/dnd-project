import React, { useState } from "react";
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
import MyProfile from "./components/MyProfile/MyProfile";
import Edit from "./components/MyProfile/Edit/Edit";
import { useAuth } from "./components/hooks/auth-hook";
import "./App.css";
import { LoginContext } from "./components/store/login-context";

function App() {
  const [onscreen, statusCheck] = useState(false);
  const calcStatusCheck = (status) => {
    statusCheck(status);
  };
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/build_encounter" element={<BuildEncounter />} />
        <Route path="/submit_homebrew" element={<SubmitHomeBrew />} />
        <Route path="/my_encounters" element={<MyEncounters />} />
        <Route path="/battle_scr/:id" element={<BattleScreen />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myProfile/Edit/:id" element={<Edit />} />
      </React.Fragment>
    );
  } else {
    routes = <Route path="/" element={<Login />} />;
  }
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Navigation />

      {onscreen === true ? (
        <Calculator>
          <Hide onHide={calcStatusCheck} />
        </Calculator>
      ) : (
        token && <Show onShow={calcStatusCheck} />
      )}

      <Routes>{routes}</Routes>
    </LoginContext.Provider>
  );
}

export default App;
