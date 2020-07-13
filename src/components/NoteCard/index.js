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
        <StyledNoteCard>
            <div onClick={handleClick} onMouseOver={() => setMouseOver(true)}
                  onMouseOut={() => setMouseOver(false)} className={`card ${isMouseOver ? "box" : ""}`}>
                {title ? <div className={"title"}>{title}</div> : null}
                <div className={"desc"}>
                    {note}
                </div>
            </div>
        </StyledNoteCard>
    )
};

export default NoteCard;
