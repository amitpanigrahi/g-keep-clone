import React from "react";
import Toggle from "../ToggleTheme";
import {useTheme} from "../../ThemeContext";
import HamBurger from "../HamBurger";
import {StyledHeaderWrapper} from "./styles";
import SearchBar from "../SearchBar";

const Header = ({title = "Notes", toggleSidebar}) => {
    const themeState = useTheme();
    const {
        theme,
        toggleTheme
    } = themeState;
    return (
        <StyledHeaderWrapper>
            <div className={"burger-title"}>
                <HamBurger onClick={toggleSidebar} />
                <div className={"title"}>{title}</div>
            </div>
            <SearchBar/>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
        </StyledHeaderWrapper>
    )
};

export default Header;
