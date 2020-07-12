import {action, REQUEST} from "./actionCreator";
import {CHANGE_TAB, CREATE_OR_UPDATE_NOTE_LIST} from "./actionTypes";

export const changeTab = {
    request: (payload) => action(CHANGE_TAB[REQUEST], {payload})
};

export const createOrUpdateNoteList = {
    request: (payload) => action(CREATE_OR_UPDATE_NOTE_LIST[REQUEST], {payload})
};
