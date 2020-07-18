import React from "react";
import {StyledIcon} from "./styles";

const ActionIcon = ({icon, onClick}) => {
    return (
        <StyledIcon onClick={() => (onClick && onClick())}
             className={"btn btn_hf cursor_pointer border_none"}>{icon}</StyledIcon>
    )
};

export default ActionIcon;
