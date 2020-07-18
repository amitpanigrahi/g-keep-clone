import _get from "lodash/get";
import {optionList} from "../constants/sidebarOptions";

export const trimLeft = string =>
    string ? string.replace(/^\s+/, "") : string;

export const debounce = (func, delay) => {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay)
    }
};

export const checkNoteSearchQuery = (query = "", data = {}) => {
    if (!query) return true;
    const {
        title = "",
        note = "",
    } = data;
    const stringed = (title+" "+note).toLowerCase();
    return (stringed.includes(query.trim().toLowerCase()))
};

export const uuidGenerator = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
};

export const manageNoteListUpdate = (listData = [], data = {}) => {
  let resp = [...listData];
  const filteredIndex = listData.findIndex(val => (val && val.id === data.id));
  const isValid = data.note || data.title;
  if (filteredIndex >= 0) {
      if (!isValid) {
          delete resp[filteredIndex];
      }
      else {
          resp[filteredIndex] = {...resp[filteredIndex], ...data};
      }
  }
  else if (isValid) {
          resp.push(data);
  }
  return resp.filter(val => !!val);
};

export const timeSort = (a, b, sortByField = "updated_at") =>  (_get(b, sortByField, 0) - _get(a, sortByField, 0));

const tabPredictor = (value) => optionList.find(val => value.includes(val.activeTab));

export const tabMatchObj = (value) => optionList.find(val => val.activeTab === value) || tabPredictor(value) || optionList[0];

export const _handleKeyDown = ({key}, trigger) => {
    if (key === "Escape") {
        trigger()
    }
};
