import React, {useState} from "react";
import {StyledNoteCard} from "./styles";
import Modal from "../Modal";
import NoteCreator from "../NoteCreator";

const NoteCard = ({data = {}, handleClick}) => {
    const {
        title = "",
        note = ""
    } = data;
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <StyledNoteCard onClick={handleClick} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} className={`${isMouseOver ? "box" : ""}`}>
            {title ? <div className={"title"}>{title}</div> : null}
            <div>
                {note}
            </div>
        </StyledNoteCard>
    )
};

export default NoteCard;
