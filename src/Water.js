import React from "react";
import { NavLink } from "react-router-dom";

import "./Water.css"

const Water = () => {

    return (
        <div id="water-div" className="Water-div">
            <nav className="Water-nav">
                <NavLink exact to="/">
                    Back
                </NavLink>
            </nav>
        </div>
    )

}

export default Water;