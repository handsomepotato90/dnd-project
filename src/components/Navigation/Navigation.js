import React, { useContext } from "react";
import { LoginContext } from "../store/login-context";
import { Link } from "react-router-dom";
import Logo from "../../icons/DNDlogo.png";
import "./Navigation.css";

const Navigation = () => {
  const auth = useContext(LoginContext);
  return (
    <nav className="nav__size nav__bcc">
      <Link to="/">
        <img className="logo__size" src={Logo} alt="logo"></img>
      </Link>
      <ul className="nav_links">
        {auth.isLoggedIn && <CustomLink to="/voting">Voting</CustomLink>}
        {auth.isLoggedIn && <CustomLink to="/build_encounter">Build Encounter</CustomLink>}
        {auth.isLoggedIn && <CustomLink to="/submit_homebrew">Submit HomeBrew</CustomLink>}
        {auth.isLoggedIn && <CustomLink to="/my_encounters">My Encounters</CustomLink>}
        {auth.isLoggedIn && <CustomLink to="/" onClick={auth.logout}>Logout</CustomLink>}

      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  return (
    <li className="link_style">
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
};

export default Navigation;
