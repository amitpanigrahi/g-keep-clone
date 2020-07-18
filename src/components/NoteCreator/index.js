import React, {useEffect, useState, useRef} from "react";
import {StyledNoteCreatorContainer, StyledNoteFooter} from "./styles";
import {
    ARCHIVE_ICON,
    PIN_ICON,
    PINNED_ICON,
    THRASH_ICON,
    TRASH_RESTORE_ICON,
    UN_ARCHIVE_ICON
} from "../../constants/imgMap";
import {debounce, trimLeft, uuidGenerator} from "../../utils/helper";
import {connect} from "react-redux";
import {createOrUpdateNoteList} from "../../actions";
import ActionIcon from "../ActionIcon";
import RIT from "../_generic/RenderIfTrue";

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

    const {
        status = "",
        isPinned = false,
        id,
        isDeleted
    } = noteObj;
    return (
        <StyledNoteCreatorContainer>
            <input onChange={e => setTitle(trimLeft(e.target.value))} value={cardTitle} onFocus={() => setFocused(true)}
                   placeholder={focused ? "Title" : "Add Note"} className={"title-input"}/>
            <div className={`d_flex align_items_center flex_column desc-action ${focused ? "active" : ""}`}>
                <textarea ref={descRef} onChange={e => setNote(trimLeft(e.target.value))} value={cardNote}
                          placeholder={"Description"}
                          className={`desc-input`}/>
                <StyledNoteFooter className={"footer-panel d_flex justify_content_between align_items_center"}>
                    <div className={"action-icons d_flex align_items_center"}>
                        <RIT cnd={!isDeleted}>
                            {status !== "archive" ?
                                <ActionIcon icon={ARCHIVE_ICON}
                                            onClick={() => updateNote({status: "archive"})}/> :
                                <ActionIcon icon={UN_ARCHIVE_ICON}
                                            onClick={() => updateNote({status: "active"})}/>
                            }
                        </RIT>
                        {isPinned ?
                            <ActionIcon icon={PINNED_ICON} onClick={() => updateNote({isPinned: false})}/> :
                            <ActionIcon icon={PIN_ICON} onClick={() => updateNote({isPinned: true})}/>
                        }
                        <RIT cnd={id}>
                            {!isDeleted ?
                                <ActionIcon icon={THRASH_ICON} onClick={() => updateDoc({isDeleted: true})}/> :
                                <ActionIcon icon={TRASH_RESTORE_ICON} onClick={() => updateDoc({isDeleted: false})}/>}
                        </RIT>
                    </div>
                    <button className={"close-option cursor_pointer btn btn_hf border_none"} onClick={() => updateDoc({})}>CLOSE</button>
                </StyledNoteFooter>
            </div>
        </StyledNoteCreatorContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    d__updateNoteList: (data) => dispatch(createOrUpdateNoteList.request(data)),
});

export default connect(null, mapDispatchToProps)(NoteCreator);
