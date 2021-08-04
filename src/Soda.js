import React from "react";
import { NavLink } from "react-router-dom";
import imgSodaCans from "./static/Can-Soda-Transparent-Background.png";

import "./Soda.css"

const Soda = () => {

    return (
        <div id="soda-div" className="Soda-div">
            <nav className="Soda-nav">
                <NavLink exact to="/">
                    Back
                </NavLink>
            </nav>
            <img className="Soda-img" src={imgSodaCans} />
        </div>
    )

}

export default Soda;