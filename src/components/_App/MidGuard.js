import React, {useEffect} from "react";
import WorkSpaceComponent from "../../containers/WorkSpace";
import {updateUiSettings} from "../../actions";
import {connect} from "react-redux";
import {tabMatchObj} from "../../utils/helper";

const MidGuard = ({match, d__updateUiSettings}) => {
    const {
        params: {
            activeTabId = ""
        }
    } = match;
    useEffect(() => {
        d__updateUiSettings(tabMatchObj(activeTabId.toLowerCase()));
    }, [activeTabId, d__updateUiSettings]);
    return (
        <WorkSpaceComponent/>
    )
};

const mapDispatchToProps = (dispatch) => ({
    d__updateUiSettings: (data) => dispatch(updateUiSettings.request(data)),
});

export default connect(null, mapDispatchToProps)(MidGuard);
