import React, {useEffect, useState} from "react";
import {StyledNoteCreatorContainer, StyledNoteFooter} from "./styles";
import {ARCHIVE_ICON} from "../../constants/imgMap";
import {trimLeft, uuidGenerator} from "../../utils/helper";
import {connect} from "react-redux";
import {createOrUpdateNoteList} from "../../actions";

const initialNoteObj = {
    id: "",
    title: "",
    note: "",
    isPinned: false,
    status: "active",
    created_at: null,
    updated_at: null,
};

// new Date().getTime()

const NoteCreator = ({data = {}, d__updateNoteList}) => {
    const {
        id = "",
        title = "",
        note = "",
    } = data;
    const [noteObj, setNoteObj] = useState(id ? data : initialNoteObj);
    const [focused, setFocused] = useState(false);
    const [cardTitle, setTitle] = useState(title);
    const [cardNote, setNote] = useState(note);
    const isNew = !!!noteObj.id;
    const restState = () => {
        setNoteObj(initialNoteObj);
        setFocused(false);
        setTitle("");
        setNote("");
    };
    const updateDoc = () => {
        d__updateNoteList(noteObj);
        restState();
    };
    const handleNoteDelete = (data) => {

    };


    const handleNoteChanges = () => {
        if (isNew && !noteObj.id) {
            const newNote = {
                ...initialNoteObj,
                note: cardNote,
                title: cardTitle,
                id: uuidGenerator(),
                created_at: new Date().getTime(),
                updated_at: new Date().getTime()
            };
            setNoteObj({...newNote});
        }
        else {
            if (!cardTitle && !cardNote) {
                handleNoteDelete(noteObj);
                return
            }
            const resp = {...noteObj, updated_at: new Date().getTime(), note: cardNote, title: cardTitle,};
            setNoteObj({...resp});
        }
    };
    useEffect(() => {
        handleNoteChanges();
    }, [cardTitle, cardNote]);
    console.log(noteObj, ">>>>>");
    return (
        <StyledNoteCreatorContainer>
            <input onChange={e => setTitle(trimLeft(e.target.value))} value={cardTitle} onFocus={() => setFocused(true)} placeholder={"Title"} className={"title-input"}/>
            <div className={`d_flex align_items_center flex_column desc-action ${focused ? "active" : ""}`}>
                <textarea onChange={e => setNote(trimLeft(e.target.value))} value={cardNote} placeholder={"Description"} className={`desc-input`}/>
                <StyledNoteFooter className={"footer-panel d_flex justify_content_between align_items_center"}>
                    <div onClick={() => setNoteObj({...noteObj, status: "archive"})} className={"cursor_pointer"}>{ARCHIVE_ICON}</div>
                    <div className={"close-option cursor_pointer"} onClick={updateDoc}>CLOSE</div>
                </StyledNoteFooter>
            </div>
        </StyledNoteCreatorContainer>
    )
};

const mapDispatchToProps = dispatch => ({
   d__updateNoteList: data => dispatch(createOrUpdateNoteList.request(data))
});

export default connect(null, mapDispatchToProps)(NoteCreator);
