import {REQUEST} from "../actions/actionCreator";
import {TEST_DATA} from "../temp";
import {CREATE_NOTE, CREATE_OR_UPDATE_NOTE_LIST, UPDATE_NOTE} from "../actions/actionTypes";
import {manageNoteListUpdate} from "../utils/helper";

// const REMOVE_NOTE = 'REMOVE_NOTE';
// const GET_NOTES = 'GET_NOTES';
// const GET_TAGS = 'GET_TAGS';
// const SET_LAST_INDEX = 'SET_LAST_INDEX';
// const GET_NOTE_STRUCTURE = 'GET_NOTE_STRUCTURE';
// const UPDATE_STRUCTURE = 'UPDATE_STRUCTURE';
// const EDIT_NOTE = 'EDIT_NOTE';
// const CLEAR_EDIT_FORM = 'CLEAR_EDIT_FORM';

// // export const addNote = (note) => (dispatch, getState) => {
// //     addNoteToDB(note);
// // };
// export const getNotes = (notes) => {
//     return {
//         type: GET_NOTES,
//         payload: notes
//     };
// };
// export const deleteNote = (note) => ({
//     type: REMOVE_NOTE,
//     payload: note.id
// });
// // export const addTag = (tag) => (dispatch, getState) => {
// //     addTagToDB(tag);
// // };
// export const getTags = (tags) => {
//     return {
//         type: GET_TAGS,
//         payload: tags
//     };
// };
//
// export const setLastIndex = (lastIndex) => {
//     return {
//         type: SET_LAST_INDEX,
//         payload: lastIndex
//     };
// };
// export const getNoteStructure = (noteStructure) => {
//     return {
//         type: GET_NOTE_STRUCTURE,
//         payload: noteStructure
//     };
// };
// export const updateStructureLocally = (newStructure) => {
//     return {
//         type: UPDATE_STRUCTURE,
//         payload: newStructure
//     };
// };
//
// export const editNote = (note) => {
//     return {
//         type: EDIT_NOTE,
//         payload: note
//     };
// };
//
// export const clearEditNote = () => {
//     return {
//         type: CLEAR_EDIT_FORM
//     };
// };

const initialArrayState = {
    data: [...TEST_DATA],
    isFetching: false,
};

const notes = (state = {...initialArrayState}, action) => {
    switch (action.type) {
        case UPDATE_NOTE[REQUEST]:
            return {...state};
        case CREATE_OR_UPDATE_NOTE_LIST[REQUEST]:
            // manageNoteListUpdate(state.data, action.payload);
            // state.data.push(action.payload);
            // console.log(action.payload);
            return {...state, data: [...manageNoteListUpdate(state.data, action.payload)]};
        default:
            return { ...state };
    }
};

export default notes;
