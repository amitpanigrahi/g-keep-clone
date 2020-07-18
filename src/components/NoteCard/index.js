import React, {useState} from "react";
import {StyledNoteCard} from "./styles";
import ActionControlPanel from "../NoteActionControl";
import {createOrUpdateNoteList} from "../../actions";
import {connect} from "react-redux";

const NoteCard = ({data = {}, handleClick, d__updateNoteList}) => {
    const {
        title = "",
        note = ""
    } = data;
    const [isMouseOver, setMouseOver] = useState(false);
    const handleNoteUpdate = (obj) => {
        const updatedCardData = {...data, ...obj, updated_at: new Date().getTime()};
        d__updateNoteList(updatedCardData);
    };

    return (
        <StyledNoteCard>
            <div onMouseOver={() => setMouseOver(true)}
                 onMouseOut={() => setMouseOver(false)} className={`card ${isMouseOver ? "box" : ""}`}>
                <div onClick={handleClick} className={"info-box"}>
                    {title ? <div className={"title"}>{title}</div> : null}
                    <div className={"desc"}>
                        {note}
                    </div>
                </div>
                <div className={"action-panel"}>
                    <ActionControlPanel data={data} handleNoteChange={handleNoteUpdate}/>
                </div>
            </div>
        </StyledNoteCard>
    )
};

const mapDispatchToProps = dispatch => ({
    d__updateNoteList: (data) => dispatch(createOrUpdateNoteList.request(data)),
});

export default connect(null, mapDispatchToProps)(NoteCard);
