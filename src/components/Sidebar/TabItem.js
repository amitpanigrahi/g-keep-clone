import React from "react";

const TabItem = ({handleChange, isActive = false, data = {}, isExpanded}) => {
    const {
        icon,
        activeTabLabel: label,
    } = data;
    return (
        <button onClick={handleChange} className={`item d_flex align_items_center btn btn_hf border_none ${isActive ? "active" : ""}`}>
            <span className={"icon-wrap"}>{icon}</span><span className={"label"}>{isExpanded ? label : ""}</span>
        </button>
    )
};

export default TabItem;


