import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import { useAuth } from "./components/hooks/auth-hook";
import "./App.css";
import { LoginContext } from "./components/store/login-context";
import LoadingSpinner from "./components/UI/LoadingSpinner";


const BuildEncounter = React.lazy(() =>
  import("./components/BuildEncounter/BuildEncounter")
);
const MyEncounters = React.lazy(() =>
  import("./components/MyEncounters/MyEncounters")
);
const BattleScreen = React.lazy(() =>
  import("./components/MyEncounters/BattleScreen")
);
const SubmitHomeBrew = React.lazy(() =>
  import("./components/SubmitHomeBrew/SubmitHomeBrew")
);
const MyProfile = React.lazy(() => import("./components/MyProfile/MyProfile"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Voting = React.lazy(() => import("./components/Voting/Voting"));


function App() {

  const { token, login, logout, userId,googleAuth, google,username } = useAuth();
  // const { token, login, logout, userId ,username } = useAuth();
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
        <Route path="/myProfile/*" element={<MyProfile />} />

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
        google:google,
        username:username,
        login: login,
        logout: logout,
        googleAuth:googleAuth,
      }}
    >
      <Navigation />

      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>{routes}</Routes>
      </Suspense>
    </LoginContext.Provider>
  );
}

export default App;
