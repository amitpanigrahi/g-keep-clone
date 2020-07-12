import React from "react";
import {ModalContainer, Overlay} from "./styles";

const Modal = ({children, onClose}) => {
    return (
        <Overlay>
            <ModalContainer>
                <span className={"close"} onClick={onClose}>Close</span>
                {children}
            </ModalContainer>
        </Overlay>
    )
};

export default Modal;
