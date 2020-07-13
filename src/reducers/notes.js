import {REQUEST} from "../actions/actionCreator";
import {CREATE_OR_UPDATE_NOTE_LIST} from "../actions/actionTypes";
import {manageNoteListUpdate} from "../utils/helper";

const initialArrayState = {
    data: [],
    isFetching: false,
};

const notes = (state = {...initialArrayState}, action) => {
    switch (action.type) {
        case CREATE_OR_UPDATE_NOTE_LIST[REQUEST]:
            return {...state, data: [...manageNoteListUpdate(state.data, action.payload)]};
        default:
            return state;
    }
};

export default notes;
