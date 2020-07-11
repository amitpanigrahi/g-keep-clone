import React, {useState} from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Display from "../../components/Display";

const WorkSpaceComponent = () => {
    const [expandedSidebar, setSideBar] = useState(false);
    return (
        <div>
            <Header toggleSidebar={() => setSideBar(!expandedSidebar)}/>
            <div className={"d_flex"}>
                <Sidebar isExpanded={expandedSidebar}/>
                <Display/>
            </div>
        </div>
    )
};

export default WorkSpaceComponent;
