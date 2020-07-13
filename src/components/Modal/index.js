import React from "react";
import {ModalContainer, Overlay} from "./styles";

const Modal = ({children, onClose}) => {
    return (
        <>
            <ModalContainer>
                <Overlay onClick={onClose}/>
                <div className={"children"}>
                    {children}
                </div>
            </ModalContainer>
        </>
    )
};

export default Modal;
