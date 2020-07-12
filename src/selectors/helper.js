import _get from "lodash/get";

export const getNotesReducer = state => _get(state, "notes", {});
export const getUiReducer = state => _get(state, "ui", {});
