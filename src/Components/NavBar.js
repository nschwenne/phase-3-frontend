import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    
    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/weapons" exact>Weapons</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/users" exact>Users</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/characters" exact>Characters</NavLink>
        </nav>
    );
}

export default NavBar;