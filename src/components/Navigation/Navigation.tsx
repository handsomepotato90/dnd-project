import React, { useState, useContext } from "react";
import { ReactSVG } from "react-svg";
import { LoginContext } from "../store/login-context";
import { Link } from "react-router-dom";
import NavigationDrawer from "../UI/NavigationDrawer";
import CalculatorImage from "../UI/CalculatorRotation/CalculatorImage";
import NavigatorBack from "./NavigatorBack";
import Calculator from "../NewCalculator/Calculator";

import Logo from "../../icons/DNDlogo.png";
import Encounter from "../../icons/encounter.svg";
import Vote from "../../icons/Vote.svg";
import Brew from "../../icons/Brew.svg";
import Build from "../../icons/Build.svg";
import Profile from "../../icons/Profile.svg";
import Logout from "../../icons/Logout.svg";

import "./Navigation.css";

const Navigation = () => {
  const auth = useContext(LoginContext);
  const [burger, setBurger] = useState(false);
  const [onScreen, setCalcStatus] = useState(false);

  const calcStatusCheck = (status: boolean) => {
    setCalcStatus(status);
  };
  const openNav = () => {
    setBurger(true);
  };
  const closeNav = (close: boolean) => {
    setBurger(close);
  };
  const content = (
    <>
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
            {burger && (
              <SvgComponent
                Image={Profile}
                height="40"
                color="red"
                width="70"
              ></SvgComponent>
            )}
            {!burger && (
              <div className="my_profile__style">
                <span>{auth.username}</span>
              </div>
            )}
          </Links>
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
    <NavigatorBack className="" >
      <Link to="/">
        <img className="logo__size" src={Logo} alt="logo"></img>
      </Link>
      {auth.isLoggedIn && onScreen && (
        <CustomButton onClick={calcStatusCheck} action={false}>
          <CalculatorImage></CalculatorImage>
        </CustomButton>
      )}
      {auth.isLoggedIn && !onScreen && (
        <CustomButton onClick={calcStatusCheck} action={true}>
          <CalculatorImage></CalculatorImage>
        </CustomButton>
      )}
      {auth.isLoggedIn && <div></div>}
      {auth.isLoggedIn && burger && (
        <NavigationDrawer className="burger__style" onClick={closeNav}>
          {content}
        </NavigationDrawer>
      )}
      <ul className="nav_links">{content}</ul>
      {onScreen && (
        <ul>
          {" "}
          <Calculator />
        </ul>
      )}
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

interface LinksProps{
  to: string,
  children: React.ReactNode,
  props?: object,
}

export const Links: React.FC<LinksProps> = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {" "}
      {children}
    </Link>
  );
};

interface CustomLinkProps{
  to?:string,
  onClick: (boolean:boolean) => void,
  description: string,
  children: React.ReactNode,
}

export const CustomLink: React.FC<CustomLinkProps> = ({ onClick, description, children}) => {
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
      onClick={() => onClick(false)}
      className="center_burger_link svg_style"
    >
      {children}
      {hover && <span className="hover__text">{description}</span>}
    </li>
  );
};

interface SvgComponentProps{
  Image: string,
  width: string,
  height: string,
  color: string
}

export const SvgComponent: React.FC<SvgComponentProps> = ({Image, width, height, color}) => {
  return (
    <ReactSVG
      src={Image}
      beforeInjection={(svg) => {
        svg.setAttribute(
          "style",
          `width: ${width}px;height: ${height}px;fill:${color}`
        );
      }}
    ></ReactSVG>
  );
};

interface CustomButtonProps {
  to?: string,
  children: React.ReactNode,
  props?: object,
  action: boolean,
  onClick: (action:boolean) => void,
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, action}) => {
  return (
    <div className="link_style" onClick={() => onClick(action)}>
      {children}
    </div>
  );
};

export default Navigation;
