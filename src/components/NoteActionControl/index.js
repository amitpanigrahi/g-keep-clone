import React from "react";
import {StyledNoteFooter} from "../NoteCreator/styles";
import RIT from "../_generic/RenderIfTrue";
import ActionIcon from "../ActionIcon";
import {
    ARCHIVE_ICON,
    PIN_ICON,
    PINNED_ICON,
    THRASH_ICON,
    TRASH_RESTORE_ICON,
    UN_ARCHIVE_ICON
} from "../../constants/imgMap";
import {StyledActionControlPanel} from "./styles";

const ActionControlPanel = ({data = {}, handleNoteChange, handleNoteSubmit = null}) => {
    const {
        status = "",
        isPinned = false,
        id,
        isDeleted,
        isWrapper = true
    } = data;
    return (
        <StyledActionControlPanel className={"footer-panel d_flex justify_content_between align_items_center"}>
            <div className={`w-100 d_flex align_items_center justify_content_between ${isWrapper ? "wrapper" : ""}`}>
                <div className={"action-icons d_flex align_items_center"}>
                    <RIT cnd={!isDeleted}>
                        {status !== "archive" ?
                            <ActionIcon icon={ARCHIVE_ICON}
                                        onClick={() => handleNoteChange({status: "archive"})}/> :
                            <ActionIcon icon={UN_ARCHIVE_ICON}
                                        onClick={() => handleNoteChange({status: "active"})}/>
                        }
                    </RIT>
                    {isPinned ?
                        <ActionIcon icon={PINNED_ICON} onClick={() => handleNoteChange({isPinned: false})}/> :
                        <ActionIcon icon={PIN_ICON} onClick={() => handleNoteChange({isPinned: true})}/>
                    }
                    <RIT cnd={id}>
                        {!isDeleted ?
                            <ActionIcon icon={THRASH_ICON} onClick={() => handleNoteChange({isDeleted: true})}/> :
                            <ActionIcon icon={TRASH_RESTORE_ICON}
                                        onClick={() => handleNoteChange({isDeleted: false})}/>}
                    </RIT>
                </div>
                <RIT cnd={handleNoteSubmit}>
                    <button className={"close-option cursor_pointer btn btn_hf border_none"}
                            onClick={() => handleNoteSubmit({})}>CLOSE
                    </button>
                </RIT>
            </div>
        </StyledActionControlPanel>
    )
};

export default ActionControlPanel;
