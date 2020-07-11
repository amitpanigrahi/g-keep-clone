import React from "react";
import {StyledSidebar} from "./styles";
const Sidebar = () => {
  return (
      <StyledSidebar>
          <div className={"item"}>
              Notes
          </div>
          <div className={"item"}>
              Archived
          </div>
      </StyledSidebar>
  )
};


export default Sidebar;
