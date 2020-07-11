import React, {useState} from "react";
import {CLOSE_ICON, SEARCH_ICON} from "../../constants/imgMap";
import {StyledInputContainer, StyledSearchBar} from "./styles";

const SearchBar = () => {
    const [inputFocused, setInputFocus] = useState(false);
    return (
        <StyledSearchBar className={inputFocused ? "focus" : ""}>
            {SEARCH_ICON}
            <StyledInputContainer>
                <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} />
            </StyledInputContainer>
            {CLOSE_ICON}
        </StyledSearchBar>
    )
};

export default SearchBar;
