import React, {useState} from "react";
import {StyledHamBurger} from "./styles";

const HamBurger = ({onClick}) => {
    const [isActive, setActive] = useState(false);
    return (
        <StyledHamBurger onClick={() => {onClick();setActive(!isActive);}} className={`hamburger${isActive ? " is-active" : ""}`}>
            <div className={"hamburger-box"}>
                <div className={"hamburger-inner"}/>
            </div>
        </StyledHamBurger>
    )
};

export default HamBurger;
