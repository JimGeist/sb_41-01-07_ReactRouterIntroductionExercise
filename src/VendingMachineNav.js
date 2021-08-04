import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

// import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import Water from "./Water";

import "./VendingMachineNav.css"

const VendingMachineNav = () => {

    return (
        <div>
            <BrowserRouter>
                {/* <NavBar /> */}
                <Route exact path="/candy">
                    <Candy />
                </Route>
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/soda">
                    <Soda />
                </Route>
                <Route exact path="/water">
                    <Water />
                </Route>
                <Route exact path="/">
                    <VendingMachine />
                </Route>
            </BrowserRouter>

        </div>
    )

}

export default VendingMachineNav;