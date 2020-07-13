import React from "react";
import {ModalContainer, Overlay} from "./styles";
import RIT from "../_generic/RenderIfTrue";

const Modal = ({children, onClose}) => {
    return (
        <>
            <ModalContainer>
                <Overlay onClick={onClose}/>
                <div className={"children"}>
                    <RIT cnd={!!onClose}> <span className={"close"} onClick={onClose}>Close</span></RIT>
                    {children}
                </div>
            </ModalContainer>
        </>
    )
};

export default Modal;
