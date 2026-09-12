import React from "react";
import "./Navbar.css"


const LOGO = require("../../assets/logo.png");

function Navbar() {
    return(
        <div className="navbar-container">
            <a href="/"> 
                <img src={LOGO} className="app-logo" alt="logo" /> 
            </a>
            <div className="navbar-links">
                <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/resume"> Resumé </a>
                <a href="/contact"> Contact </a>
            </div>
        </div>
    )

}

export default Navbar;