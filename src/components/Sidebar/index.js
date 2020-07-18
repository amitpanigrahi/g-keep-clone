import React from "react";
import {StyledSidebar} from "./styles";
import TabItem from "./TabItem";
import {Overlay} from "../Modal/styles";
import RIT from "../_generic/RenderIfTrue";
import {optionList} from "../../constants/sidebarOptions";
import {withRouter} from "react-router-dom";

const Sidebar = (props) => {
    const {
        isExpanded,
        activeTab,
        toggleSidebar,
        history
    } = props;

    const isSm = window.innerWidth < 768;
    const changeTab = val => {
        history.push(val);
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
                                 handleChange={() => changeTab(val.activeTab)}/>
                    )
                })}
            </StyledSidebar>
        </>
    )
};

export default withRouter(Sidebar);
