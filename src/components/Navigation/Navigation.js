import React, {useState, useContext } from "react";
import { LoginContext } from "../store/login-context";
import { Link } from "react-router-dom";
import Logo from "../../icons/DNDlogo.png";
import NavigationDrawer from "../UI/NavigationDrawer";
import "./Navigation.css";

const Navigation = () => {
  const auth = useContext(LoginContext);
  const [burger,setBurger] = useState(false);
  const openNav= () =>{
    setBurger(true)
  }
  const closeNav = (bau) =>{
    setBurger(bau)
  }
  const content = <>{auth.isLoggedIn && <CustomLink onClick={closeNav} to="/voting">Voting</CustomLink>}
  {auth.isLoggedIn && (
    <CustomLink onClick={closeNav} to="/build_encounter">Build Encounter</CustomLink>
  )}
  {auth.isLoggedIn && (
    <CustomLink onClick={closeNav} to="/submit_homebrew">HomeBrew</CustomLink>
  )}
  {auth.isLoggedIn && (
    <CustomLink onClick={closeNav} to="/my_encounters">My Encounters</CustomLink>
  )}
  {auth.isLoggedIn && (
    <CustomLink to="/" onClick={auth.logout}>
      Logout
    </CustomLink>
  )}</>;
  return (
    <nav className="nav__size nav__bcc">
      <Link to="/">
        <img className="logo__size" src={Logo} alt="logo"></img>
      </Link>
      {auth.isLoggedIn && burger && <NavigationDrawer onClick={closeNav} >{content}</NavigationDrawer>}
      <ul className="nav_links">
        {content}
      </ul>
      <div id="container" onClick={openNav}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  return (
    <li  onClick={() => props.onClick(false)} className="link_style">
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
};

export default Navigation;
