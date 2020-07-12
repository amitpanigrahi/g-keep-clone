import React from "react";
import {StyledNoDataWrapper} from "./styles";

const NoDataAvailable = ({text = "NO DATA AVAILABLE"}) => {
  return (
      <StyledNoDataWrapper>
          {text}
      </StyledNoDataWrapper>
  )
};

export default NoDataAvailable;
