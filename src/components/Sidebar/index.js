import React from "react";
import {StyledSidebar} from "./styles";
import {connect} from "react-redux";
import {updateUiSettings} from "../../actions";
import TabItem from "./TabItem";
import {Overlay} from "../Modal/styles";
import RIT from "../_generic/RenderIfTrue";
import {optionList} from "../../constants/sidebarOptions";

const Sidebar = (props) => {
    const {
        isExpanded,
        activeTab,
        d__updateUiSettings,
        toggleSidebar,
    } = props;

    const isSm = window.innerWidth < 768;
    const changeTab = val => {
        d__updateUiSettings({...val});
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
                        <TabItem key={i} data={val} isExpanded={isExpanded} isActive={activeTab === val.activeTab}
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
