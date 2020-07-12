import _get from "lodash/get";
import {getNotesReducer} from "./helper";
import {activeTab as getActiveTab, searchQuery as getSearchQuery} from "./ui";
import {checkNoteSearchQuery} from "../utils/helper";

export const allNotes = state => _get(getNotesReducer(state), "data", []);

export const pinnedNotes = state => _get(getNotesReducer(state), "data", []).filter(val => val && val.isPinned && val.status === getActiveTab(state));

export const filterBasedNotes = state => {
  const activeTab = getActiveTab(state);
  const searchQuery = getSearchQuery(state);
  const availableNotes = allNotes(state);
  return availableNotes.filter(val => val && val.status === activeTab && !val.isPinned && checkNoteSearchQuery(searchQuery, val));
};
