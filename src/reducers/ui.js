import {REQUEST} from "../actions/actionCreator";
import {UPDATE_UI_SETTINGS} from "../actions/actionTypes";
import {combineReducers} from "redux";

const initialState = {
    activeTab: "active",
    activeTabLabel: "Notes",
    searchQuery: "",
};

const ui = () => {
    const filterSettings = (state = {...initialState}, action) => {
        if (action.type === UPDATE_UI_SETTINGS[REQUEST]) {
            return {...state, ...action.payload}
        }
        return state
    };
    return combineReducers({
        filterSettings
    })
};

export default ui;
