import {ARCHIVE_ICON, NOTES_ICON, THRASH_ICON} from "./imgMap";

export const optionList = [
    {
        icon: NOTES_ICON,
        activeTabLabel: "Notes",
        activeTab: "active",
        noDataText: "Fresh notes will appear here"
    },
    {
        icon: ARCHIVE_ICON,
        activeTabLabel: "Archived",
        activeTab: "archive",
        noDataText: "Archive marked notes will appear here"
    },
    {
        icon: THRASH_ICON,
        activeTabLabel: "Trash",
        activeTab: "trash",
        noDataText: "Deleted notes can be viewed from here."
    },
];
