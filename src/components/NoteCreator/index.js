import React, {useEffect, useState, useRef} from "react";
import {StyledNoteCreatorContainer} from "./styles";
import {debounce, trimLeft, uuidGenerator} from "../../utils/helper";
import {connect} from "react-redux";
import {createOrUpdateNoteList} from "../../actions";
import ActionControlPanel from "../NoteActionControl";

const initialNoteObj = {
    id: "",
    title: "",
    note: "",
    isPinned: false,
    isDeleted: false,
    status: "active",
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
};

const NoteCreator = ({data = {}, d__updateNoteList, isFocused = false, handleClose}) => {
    const [isMounted, setMount] = useState(false);
    const [noteObj, setNoteObj] = useState({...initialNoteObj, ...data});
    const {
        title = "",
        note = "",
    } = noteObj;
    const descRef = useRef(null);
    const [focused, setFocused] = useState(isFocused);
    const [cardTitle, setTitle] = useState(title);
    const [cardNote, setNote] = useState(note);
    const resetState = () => {
        setNoteObj(initialNoteObj);
        setFocused(false);
        setTitle("");
        setNote("");
    };
    const updateDoc = (obj = {}, isAutoSave = false) => {
        let updatedObj = {...noteObj, ...obj, updated_at: new Date().getTime()};

        if (!cardTitle && !cardNote) {
            if (noteObj.id) {
                updatedObj = {...updatedObj, isDeleted: true};
            }
        } else {
            if (!noteObj.id) {
                updatedObj.id = uuidGenerator();
            }
        }
        if (updatedObj.id) {
            d__updateNoteList(updatedObj);
        }
        if (!isAutoSave) {
            handleClose && handleClose();
            resetState();
        }
    };

    const handleNoteChanges = () => {
        if (!!!noteObj.id) {
            const newNote = {
                ...noteObj,
                note: cardNote,
                title: cardTitle,
                created_at: new Date().getTime(),
                updated_at: new Date().getTime()
            };
            setNoteObj({...newNote});
        } else {
            const resp = {...noteObj, note: cardNote, title: cardTitle,};
            updateNote(resp);
        }
    };
    useEffect(() => {
        setMount(true);
        descRef.current.focus();
        descRef.current.setSelectionRange(cardNote.length, cardNote.length);
    }, []);
    useEffect(() => {
        if (isMounted) {
            handleNoteChanges();
        }
    }, [cardTitle, cardNote]);
    const updateNote = (obj = {}) => {
        setNoteObj({...noteObj, ...obj})
    };
    useEffect(() => {
        if (noteObj.id && isMounted) {
            debounce(() => updateDoc({note: cardNote, title: cardTitle}, true), 1500)();
        }
    }, [noteObj]);
    return (
        <StyledNoteCreatorContainer>
            <input onChange={e => setTitle(trimLeft(e.target.value))} value={cardTitle} onFocus={() => setFocused(true)}
                   placeholder={focused ? "Title" : "Add Note"} className={"title-input"}/>
            <div className={`d_flex align_items_center flex_column desc-action ${focused ? "active" : ""}`}>
                <textarea ref={descRef} onChange={e => setNote(trimLeft(e.target.value))} value={cardNote}
                          placeholder={"Description"}
                          className={`desc-input`}/>
                <ActionControlPanel data={noteObj} handleNoteChange={updateNote} handleNoteSubmit={updateDoc} />
            </div>
        </StyledNoteCreatorContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    d__updateNoteList: (data) => dispatch(createOrUpdateNoteList.request(data)),
});

export default connect(null, mapDispatchToProps)(NoteCreator);
