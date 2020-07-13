import React from "react";

const TabItem = ({handleChange, isActive = false, data = {}, isExpanded}) => {
    const {
        icon,
        activeTabLabel: label,
    } = data;
    return (
        <div onClick={handleChange} className={`item d_flex align_items_center ${isActive ? "active" : ""}`}>
            <span className={"icon-wrap"}>{icon}</span><span className={"label"}>{isExpanded ? label : ""}</span>
        </div>
    )
};

export default TabItem;


