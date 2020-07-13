import React, {useState} from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Display from "../../components/Display";
import {activeTab, activeTabLabel} from "../../selectors/ui";
import {connect} from "react-redux";

const WorkSpaceComponent = ({s__activeTabLabel = "Notes", s__activeTab = ""}) => {
    const [expandedSidebar, setSideBar] = useState(false);
    return (
        <div>
            <Header title={s__activeTabLabel} isExpanded={expandedSidebar} toggleSidebar={() => setSideBar(!expandedSidebar)}/>
            <div className={"d_flex display-body"}>
                <Sidebar activeTab={s__activeTab} toggleSidebar={() => setSideBar(!expandedSidebar)} isExpanded={expandedSidebar}/>
                <Display/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    s__activeTabLabel: activeTabLabel(state),
    s__activeTab: activeTab(state),
});

export default connect(mapStateToProps, null)(WorkSpaceComponent);
