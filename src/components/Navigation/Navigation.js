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
import NavigatorBack from "./NavigatorBack";
import Calculator from "../Calculator/Calculator";
import "./Navigation.css";

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
        <CustomLink description="Voting" onClick={closeNav}>
          <Links to="/voting">
            <SvgComponent
              Image={Vote}
              height="40"
              color="red"
              width="70"
            ></SvgComponent>
          </Links>
        </CustomLink>
      )}
      {/* {auth.isLoggedIn && <VoteSvgComponent></VoteSvgComponent>} */}
      {auth.isLoggedIn && (
        <CustomLink description="Build Encounter" onClick={closeNav}>
          <Links to="/build_encounter">
            <SvgComponent
              Image={Build}
              height="40"
              color="red"
              width="70"
            ></SvgComponent>
          </Links>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Homebrew" onClick={closeNav}>
          <Links to="/submit_homebrew">
            <SvgComponent
              Image={Brew}
              height="40"
              color="red"
              width="70"
            ></SvgComponent>
          </Links>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="Encounters" onClick={closeNav}>
          <Links to="/my_encounters">
            <SvgComponent
              Image={Encounter}
              height="50"
              color="red"
              width="70"
            ></SvgComponent>
          </Links>
        </CustomLink>
      )}
      {auth.isLoggedIn && (
        <CustomLink description="My Profile" onClick={closeNav}>
          <Links to="/myProfile">
            <SvgComponent
              Image={Profile}
              height="40"
              color="red"
              width="70"
            ></SvgComponent>
          </Links>
        </CustomLink>
      )}
      {auth.isLoggedIn &&  (
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
    <NavigatorBack>
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
    </NavigatorBack>
  );
};
export const Links = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {" "}
      {children}
    </Link>
  );
};
export const CustomLink = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  return (
    <li
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => props.onClick(false)}
    >
      {props.children}
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
export const CustomButton = ({ to, children, ...props }) => {
  return (
    <div className="link_style" onClick={() => props.onClick(props.action)}>
      {children}
    </div>
  );
};

export default Navigation;
