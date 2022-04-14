import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    const link = {
        width: "20%",
        padding: "10px",
        color: "darkblue",
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