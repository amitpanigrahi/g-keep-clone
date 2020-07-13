import React from "react";
import {StyledIcon} from "./styles";

const ActionIcon = ({icon, onClick}) => {
    return (
        <StyledIcon onClick={() => (onClick && onClick())}
             className={"cursor_pointer"}>{icon}</StyledIcon>
    )
};

export default ActionIcon;
