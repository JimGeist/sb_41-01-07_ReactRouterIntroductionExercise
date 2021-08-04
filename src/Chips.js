import React from "react";
import { NavLink } from "react-router-dom";

import "./Chips.css"

const Chips = () => {

    return (
        <div id="chips-div" className="Chips-div">
            <nav className="Chips-nav">
                <NavLink exact to="/">
                    Back
                </NavLink>
            </nav>
        </div >
    )

}

export default Chips;