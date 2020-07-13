import React, {useState} from "react";
import {StyledHamBurger} from "./styles";

const HamBurger = ({isActive, onClick}) => {
    return (
        <StyledHamBurger onClick={onClick} className={`hamburger${isActive ? " is-active" : ""}`}>
            <div className={"hamburger-box"}>
                <div className={"hamburger-inner"}/>
            </div>
        </StyledHamBurger>
    )
};

export default HamBurger;
