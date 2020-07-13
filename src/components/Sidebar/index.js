import React from "react";
import {StyledSidebar} from "./styles";
import {ARCHIVE_ICON, NOTES_ICON, THRASH_ICON} from "../../constants/imgMap";
import {activeTab} from "../../selectors/ui";
import {connect} from "react-redux";
import {updateUiSettings} from "../../actions";
import TabItem from "./TabItem";
import {Overlay} from "../Modal/styles";
import RIT from "../_generic/RenderIfTrue";

const optionList = [
    {
        icon: NOTES_ICON,
        label: "Notes",
        key: "active",
    },
    {
        icon: ARCHIVE_ICON,
        label: "Archived",
        key: "archive",
    },
    {
        icon: THRASH_ICON,
        label: "Trash",
        key: "deleted",
    },
];

const Sidebar = (props) => {
    const {
        isExpanded,
        activeTab,
        d__updateUiSettings,
        toggleSidebar,
    } = props;

    const isSm = window.innerWidth < 768;
    const changeTab = val => {
        d__updateUiSettings({activeTab: val.key, activeTabLabel: val.label});
        if (isSm) {
            toggleSidebar()
        }
    };
    return (
        <>
            <RIT cnd={isExpanded && isSm}>
                    <Overlay className={"mob-only"} onClick={toggleSidebar}/>
            </RIT>
            <StyledSidebar isExpanded={isExpanded}>
                {optionList.map((val, i) => {
                    return (
                        <TabItem key={i} data={val} isExpanded={isExpanded} isActive={activeTab === val.key}
                                 handleChange={() => changeTab(val)}/>
                    )
                })}
            </StyledSidebar>
        </>
    )
};

const mapDispatchToProps = (dispatch) => ({
    d__updateUiSettings: (data) => dispatch(updateUiSettings.request(data)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
