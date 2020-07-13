import _get from "lodash/get";

export const activeTab = (state) => _get(state, "ui.filterSettings.activeTab", "active");
export const modalData = (state) => _get(state, "ui.modalData", {});
export const activeTabLabel = (state) => _get(state, "ui.filterSettings.activeTabLabel", "Notes");
export const noActiveTabDataText = (state) => _get(state, "ui.filterSettings.noDataText", "");
export const searchQuery = (state) => _get(state, "ui.filterSettings.searchQuery", "");
