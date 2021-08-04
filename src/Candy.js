import React from "react";
import { NavLink } from "react-router-dom";
import "./Candy.css"

const Candy = () => {

    return (
        <div id="candy-div" className="Candy-div">
            <nav className="Candy-nav">
                <NavLink exact to="/">
                    Back
                </NavLink>
            </nav>
        </div >
    )

}

export default Candy;