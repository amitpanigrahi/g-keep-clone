import {combineReducers} from "redux";
import notes from "./notes";
import ui from "./ui";

export const rootReducer = combineReducers({notes, ui: ui()});
