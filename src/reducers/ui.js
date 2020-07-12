import {REQUEST} from "../actions/actionCreator";
import {CHANGE_TAB, CREATE_NOTE} from "../actions/actionTypes";
import {combineReducers} from "redux";

const initialState = {
    activeTab: "active",
    searchQuery: "",
};

const ui = () => {
    const filterSettings = (state = {...initialState}, action) => {
        if (action.type === CHANGE_TAB[REQUEST]) {
            return {...state, ...action.payload}
        }
        return state
    };
    return combineReducers({
        filterSettings
    })
};

export default ui;
