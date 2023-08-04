import React, { useState, useContext } from "react";
import { ReactSVG } from "react-svg";
import { LoginContext } from "../store/login-context";
import { Link } from "react-router-dom";
import Logo from "../../icons/DNDlogo.png";
import Encounter from "../../icons/encounter.svg";
import Vote from "../../icons/Vote.svg";
import Brew from "../../icons/Brew.svg";
import Build from "../../icons/Build.svg";
import Profile from "../../icons/Profile.svg";
import Logout from "../../icons/Logout.svg";
import NavigationDrawer from "../UI/NavigationDrawer";
import Dice from "../../icons/d20.svg";
import "./Navigation.css";
import Calculator from "../Calculator/Calculator";

const Navigation = () => {
  const auth = useContext(LoginContext);
  const [burger, setBurger] = useState(false);
  const [onScreen, setCalcStatus] = useState(false);

  const calcStatusCheck = (status) => {
    setCalcStatus(status);
  };
  const openNav = () => {
    setBurger(true);
  };
  const closeNav = (close) => {
    setBurger(close);
  };
  const content = (
    <>
      {auth.isLoggedIn && onScreen && (
        <CustomButton onClick={calcStatusCheck} action={false}>
          <SvgComponent
            Image={Dice}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomButton>
      )}
      {auth.isLoggedIn && !onScreen && (
        <CustomButton onClick={calcStatusCheck} action={true}>
          <SvgComponent
            Image={Dice}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomButton>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Voting" onClick={closeNav} to="/voting">
          <SvgComponent
            Image={Vote}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
      {/* {auth.isLoggedIn && <VoteSvgComponent></VoteSvgComponent>} */}
      {auth.isLoggedIn && (
        <CustomLink description="Build Encounter" onClick={closeNav} to="/build_encounter">
          <SvgComponent
            Image={Build}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Homebrew" onClick={closeNav} to="/submit_homebrew">
          <SvgComponent
            Image={Brew}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Encounters" onClick={closeNav} to="/my_encounters">
          <SvgComponent
            Image={Encounter}
            height="50"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="My Profile" to="/myProfile" onClick={closeNav}>
          <SvgComponent
            Image={Profile}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Logout" to="/" onClick={auth.logout}>
          <SvgComponent
            Image={Logout}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </CustomLink>
      )}
    </>
  );

  return (
    <nav className="nav__size nav__bcc">
      <Link to="/">
        <img className="logo__size" src={Logo} alt="logo"></img>
      </Link>
      {auth.isLoggedIn && burger && (
        <NavigationDrawer className="burger__style" onClick={closeNav}>
          {content}
        </NavigationDrawer>
      )}
      <ul className="nav_links">
        {content}
        {onScreen && <Calculator />}
      </ul>
      {auth.isLoggedIn && (
        <div id="container" onClick={openNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      )}
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  return (
    <li onMouseEnter={onHover} onMouseLeave={onLeave} onClick={() => props.onClick(false)}>
         
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
      {hover && <span className="hover__text">{props.description}</span>}  
    </li>
  );
};
export const SvgComponent = (props) => {
  return (
    <ReactSVG
      src={props.Image}
      beforeInjection={(svg) => {
        svg.setAttribute(
          "style",
          `width: ${props.width}px;height: ${props.height}px;fill:${props.color}`
        );
      }}
    ></ReactSVG>
  );
};
const CustomButton = ({ to, children, ...props }) => {
  return (
    <div className="link_style" onClick={() => props.onClick(props.action)}>
      {children}
    </div>
  );
};

export default Navigation;
