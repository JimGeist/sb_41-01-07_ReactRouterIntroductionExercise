import React from "react";
import { NavLink } from "react-router-dom";

import imgVendingMachine from "./static/VendingMachine_0040616855279_A.webp"
import "./VendingMachine.css"

const VendingMachine = () => {

    return (
        <>
            <div className="VendingMachine-div">
                <h2>Vending Machine</h2>
                <img className="VendingMachine-Image" src={imgVendingMachine} />
            </div>
            <div className="VendingMachine-div">
                <h2>&nbsp;</h2>
                <nav className="VendingMachine-nav">
                    <NavLink exact to="/candy">
                        Candy
                    </NavLink>
                    <NavLink exact to="/chips">
                        Chips
                    </NavLink>
                    <NavLink exact to="/soda">
                        Soda
                    </NavLink>
                    <NavLink exact to="/Water">
                        Water
                    </NavLink>
                </nav>
            </div>
        </>
    )

}

export default VendingMachine;