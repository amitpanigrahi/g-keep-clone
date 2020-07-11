import React from "react";
import {StyledSidebar} from "./styles";
import {ARCHIVE_ICON, NOTES_ICON} from "../../constants/imgMap";

const optionList = [
    {
        icon: NOTES_ICON,
        label: "Notes",
    },
    {
        icon: ARCHIVE_ICON,
        label: "Archived",
    },
];

const Sidebar = ({isExpanded}) => {
    return (
        <StyledSidebar>
            {optionList.map((val, i) => {
                const {
                    icon,
                    label,
                } = val;
                return (
                    <div key={i} className={`item d_flex align_items_center ${i ? "active" : ""}`}>
                        <span className={"icon-wrap"}>{icon}</span><span className={"label"}>{isExpanded ? label : ""}</span>
                    </div>
                )
            })}
        </StyledSidebar>
    )
};


export default Sidebar;
