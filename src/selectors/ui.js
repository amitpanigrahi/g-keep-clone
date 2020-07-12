import _get from "lodash/get";

export const activeTab = (state) => _get(state, "ui.filterSettings.activeTab", "active");
export const searchQuery = (state) => _get(state, "ui.filterSettings.searchQuery", "");
