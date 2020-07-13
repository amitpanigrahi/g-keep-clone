import {REQUEST} from "../actions/actionCreator";
import {SHOW_MODAL_NOTE, UPDATE_UI_SETTINGS} from "../actions/actionTypes";
import {combineReducers} from "redux";
import {optionList} from "../constants/sidebarOptions";

const initialState = {
    ...optionList[0],
    searchQuery: "",
};

const ui = () => {
    const filterSettings = (state = {...initialState}, action) => {
        if (action.type === UPDATE_UI_SETTINGS[REQUEST]) {
            return {...state, ...action.payload}
        }
        return state
    };
    const modalData = (state = {}, action) => {
        if (action.type === SHOW_MODAL_NOTE[REQUEST]) {
            return {...action.payload}
        }
        return state;
    };
    return combineReducers({
        filterSettings,
        modalData,
    })
};

export default ui;
