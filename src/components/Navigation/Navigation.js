import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../icons/DNDlogo.png";
import "./Navigation.css";

const Navigation = () =>{
        return(
                <nav className="nav__size nav__bcc">
                        <Link to ="/" >
                                <img className="logo__size" src={Logo} alt="logo"></img>
                        </Link>
                        <ul className= "nav_links">
                                <CustomLink to="/voting">Voting</CustomLink>
                                <CustomLink to="/build_encounter">Build Encounter</CustomLink>
                                <CustomLink to="/home">home</CustomLink>
                                <CustomLink to="/home">home</CustomLink>

                        </ul>
                </nav>
        )
 
}

const CustomLink = ({to ,children,...props}) =>{
        return (
                <li className="link_style">
                        <Link to={to} {...props}> {children}</Link>
                </li>
        )
}

export default Navigation