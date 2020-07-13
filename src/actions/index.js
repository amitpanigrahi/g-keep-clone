import {action, REQUEST} from "./actionCreator";
import {CREATE_OR_UPDATE_NOTE_LIST, SHOW_MODAL_NOTE, UPDATE_UI_SETTINGS} from "./actionTypes";

export const updateUiSettings = {
    request: (payload) => action(UPDATE_UI_SETTINGS[REQUEST], {payload})
};

export const createOrUpdateNoteList = {
    request: (payload) => action(CREATE_OR_UPDATE_NOTE_LIST[REQUEST], {payload})
};

export const setModalNote = {
    request: (payload) => action(SHOW_MODAL_NOTE[REQUEST], {payload})
};
