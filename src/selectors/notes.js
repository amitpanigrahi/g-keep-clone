import _get from "lodash/get";
import {getNotesReducer} from "./helper";
import {activeTab as getActiveTab, searchQuery as getSearchQuery} from "./ui";
import {checkNoteSearchQuery, timeSort} from "../utils/helper";

export const allNotes = state => _get(getNotesReducer(state), "data", []);

export const pinnedNotes = state => filterNoteList(state).filter(val => val.isPinned);

export const filterBasedNotes = state => {
  return filterNoteList(state).filter(val => !val.isPinned);
};

const filterNoteList = state => {
  const activeTab = getActiveTab(state);
  const isDeletedTab = (activeTab === "trash");
  const searchQuery = getSearchQuery(state);
  const availableNotes = allNotes(state);
  return availableNotes.filter(val => !!val && (val.id && (!!val.title || !!val.note) && searchQuery ? (checkNoteSearchQuery(searchQuery, val) && !val.isDeleted) : ((isDeletedTab && val.isDeleted) || (val.status === activeTab && !val.isDeleted)))).sort(timeSort);
};
