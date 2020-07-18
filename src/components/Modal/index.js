import React, {useEffect} from "react";
import {ModalContainer, Overlay} from "./styles";
import {_handleKeyDown} from "../../utils/helper";

const Modal = ({children, onClose}) => {
    useEffect(() => {
        document.addEventListener("keydown", e => _handleKeyDown(e, onClose));
        return () => document.removeEventListener("keydown", e => _handleKeyDown(e, onClose));
    }, []);
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
