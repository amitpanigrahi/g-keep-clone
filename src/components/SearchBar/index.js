import React, {useEffect, useState} from "react";
import {CLOSE_ICON, SEARCH_ICON} from "../../constants/imgMap";
import {StyledInputContainer, StyledSearchBar} from "./styles";
import {debounce, trimLeft} from "../../utils/helper";
import {updateUiSettings} from "../../actions";
import {connect} from "react-redux";
import {searchQuery as getSearchQuery} from "../../selectors/ui";

const SearchBar = ({s__searchQuery, d__updateUiSettings}) => {
    const [searchQuery, setSearch] = useState(s__searchQuery);
    const [inputFocused, setInputFocus] = useState(false);
    useEffect(() => {
        debounce(() => d__updateUiSettings({searchQuery}), 1000)();
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

const mapStateToProps = state => ({
    s__searchQuery: getSearchQuery(state),
});

const mapDispatchToProps = (dispatch) => ({
    d__updateUiSettings: (data) => dispatch(updateUiSettings.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
