import React from "react";
import {StyledSidebar} from "./styles";
import {ARCHIVE_ICON, NOTES_ICON} from "../../constants/imgMap";
import {activeTab} from "../../selectors/ui";
import {connect} from "react-redux";
import {changeTab} from "../../actions";
import TabItem from "./TabItem";

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
];

const Sidebar = (props) => {
    const {
        isExpanded,
        s__activeTab,
        d__changeTab
    } = props;

    const changeTab = key => d__changeTab({activeTab: key});
    return (
        <StyledSidebar isExpanded={isExpanded}>
            {optionList.map((val, i) => {
                return (
                    <TabItem key={i} data={val} isExpanded={isExpanded} isActive={s__activeTab === val.key}
                             handleChange={() => changeTab(val.key)}/>
                )
            })}
        </StyledSidebar>
    )
};

const mapStateToProps = (state) => ({
    s__activeTab: activeTab(state)
});

const mapDispatchToProps = (dispatch) => ({
    d__changeTab: (data) => dispatch(changeTab.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
