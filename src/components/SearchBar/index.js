import React, {useEffect, useState} from "react";
import {CLOSE_ICON, SEARCH_ICON} from "../../constants/imgMap";
import {StyledInputContainer, StyledSearchBar} from "./styles";
import {debounce, trimLeft} from "../../utils/helper";
import {updateUiSettings} from "../../actions";
import {connect} from "react-redux";

const SearchBar = ({d__updateUiSettings}) => {
    const [searchQuery, setSearch] = useState("");
    const [inputFocused, setInputFocus] = useState(false);
    useEffect(() => {
        debounce(() => d__updateUiSettings({searchQuery}), 1500)();
    }, [searchQuery]);
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

const mapDispatchToProps = (dispatch) => ({
    d__updateUiSettings: (data) => dispatch(updateUiSettings.request(data)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
