import React from "react";
import NoteCard from "../NoteCard";
import {StyledNoteListContainer, StyledDisplayWrapper} from "./styles";
import NoteCreator from "../NoteCreator";
import {connect} from "react-redux";
import {filterBasedNotes, pinnedNotes} from "../../selectors/notes";
import RIT from "../_generic/RenderIfTrue";
import NoDataAvailable from "../common/NoDataAvailable";
import Modal from "../Modal";
import _isEmpty from "lodash/isEmpty";
import {setModalNote} from "../../actions";
import {activeTab, modalData, noActiveTabDataText} from "../../selectors/ui";
import {optionList} from "../../constants/sidebarOptions";

const Display = ({s__activeTab, s__noActiveTabDataText = "", s__allNotes, s__pinnedNotes, s__modalData, d__setModalData}) => {
    const setNoteModalView = (data) => {
        d__setModalData(data);
    };
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
                <RIT cnd={s__allNotes.length}>
                    <p className={"headline"}>OTHERS</p>
                    <div className={"cards-container"}>
                        {s__allNotes.map((val, i) => <NoteCard handleClick={() => setNoteModalView(val)} data={val} key={i}/>)}
                    </div>
                </RIT>
            </StyledNoteListContainer>
            <RIT cnd={!s__pinnedNotes.length && !s__allNotes.length}>
                <NoDataAvailable icon={optionList.find(val => val.activeTab === s__activeTab).icon} text={s__noActiveTabDataText} />
            </RIT>
            <RIT cnd={!_isEmpty(s__modalData) && s__modalData.id}>
                <Modal onClose={() => setNoteModalView({})}>
                    <NoteCreator isFocused={true} handleClose={() => setNoteModalView({})} data={s__modalData}/>
                </Modal>
            </RIT>
        </StyledDisplayWrapper>
    )
};

const mapStateToProps = state => ({
    s__allNotes: filterBasedNotes(state),
    s__pinnedNotes: pinnedNotes(state),
    s__modalData: modalData(state),
    s__noActiveTabDataText: noActiveTabDataText(state),
    s__activeTab: activeTab(state),
});

const mapDispatchToProps = dispatch => ({
    d__setModalData: data => dispatch(setModalNote.request(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
