import React, {useState} from "react";
import {CLOSE_ICON, SEARCH_ICON} from "../../constants/imgMap";
import {StyledInputContainer, StyledSearchBar} from "./styles";
import {debounce, trimLeft} from "../../utils/helper";

const SearchBar = () => {
    const [searchQuery, setSearch] = useState("");
    const [inputFocused, setInputFocus] = useState(false);
    return (
        <StyledSearchBar className={inputFocused ? "focus" : ""}>
            {SEARCH_ICON}
            <StyledInputContainer>
                <input value={searchQuery} onChange={e => setSearch(trimLeft(e.target.value))} onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} />
            </StyledInputContainer>
            {searchQuery ? <span onClick={() => setSearch("")} className={"cursor_pointer"}>{CLOSE_ICON}</span> : null}
        </StyledSearchBar>
    )
};

export default SearchBar;
