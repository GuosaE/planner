import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    const link = {
        width: "70px",
        padding: "10px",
        margin: "2px 5px 5px",
        background: "lightskyblue",
        color: "black",
      };


    return (
        <div className="navbar">
        <br></br>
        <NavLink to="/"
        exact
        style={link}>
            Home
        </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/events"
        exact
        style={link}>
            Events
        </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/events/new"
        exact
        style={link}>
            Add New Event
        </NavLink>
        </div>
    );
};

export default NavBar;