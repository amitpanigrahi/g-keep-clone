import React from "react";
import {StyledNoteCard} from "./styles";

const NoteCard = ({title = "Amit", text = "amit this is a test card designed for multiple line test in the card data."}) => {
  return (
      <StyledNoteCard>
          {title ? <div className={"title"}>{title}</div> : null}
          <div>
              {text}
          </div>
      </StyledNoteCard>
  )
};

export default NoteCard;
