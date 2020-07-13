import React from "react";
import {StyledNoDataWrapper} from "./styles";

const NoDataAvailable = ({icon = null, text = "NO DATA AVAILABLE"}) => {
  return (
      <StyledNoDataWrapper>
          {icon ? icon : null}
          {text}
      </StyledNoDataWrapper>
  )
};

export default NoDataAvailable;
