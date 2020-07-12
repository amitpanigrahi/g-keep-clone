import React, {useState} from "react";
import NoteCard from "../NoteCard";
import {StyledNoteListContainer, StyledDisplayWrapper} from "./styles";
import NoteCreator from "../NoteCreator";
import {connect} from "react-redux";
import {allNotes, filterBasedNotes, pinnedNotes} from "../../selectors/notes";
import RIT from "../_generic/RenderIfTrue";
import NoDataAvailable from "../common/NoDataAvailable";
import Modal from "../Modal";
import _isEmpty from "lodash/isEmpty";

const Display = ({s__allNotes, s__pinnedNotes}) => {
    const [showNote, setNoteModalView] = useState({});
    console.log("s__allNotes>>>>>>", s__allNotes);
    return (
        <StyledDisplayWrapper>
            <NoteCreator/>
            <RIT cnd={s__pinnedNotes.length}>
                <StyledNoteListContainer className={"d_flex justify_content_center"}>
                    <p className={"headline"}>PINNED</p>
                    <div className={"cards-container"}>
                        {s__pinnedNotes.map((val, i) => <NoteCard handleClick={() => setNoteModalView(val)} data={val} key={i}/>)}
                    </div>
                </StyledNoteListContainer>
            </RIT>
            <StyledNoteListContainer className={"d_flex justify_content_center"}>
                <RIT cnd={s__pinnedNotes.length}>
                    <p className={"headline"}>OTHERS</p>
                </RIT>
                <RIT cnd={s__allNotes.length} fb={<NoDataAvailable/>}>
                    <div className={"cards-container"}>
                        {s__allNotes.map((val, i) => <NoteCard handleClick={() => setNoteModalView(val)} data={val} key={i}/>)}
                    </div>
                </RIT>
            </StyledNoteListContainer>
            <RIT cnd={!_isEmpty(showNote)}>
                <Modal onClose={() => setNoteModalView({})}>
                    <NoteCreator data={showNote}/>
                </Modal>
            </RIT>
        </StyledDisplayWrapper>
    )
};

const mapStateToProps = state => ({
    s__allNotes: filterBasedNotes(state),
    s__pinnedNotes: pinnedNotes(state),
});

export default connect(mapStateToProps, null)(Display);
