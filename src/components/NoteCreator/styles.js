import styled from "styled-components";

export const StyledNoteCreatorContainer = styled("div")`
    width: 400px;
    max-width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);
    transition: all 0.4s ease-in-out;
    background-color: #fff;
    .title-input {
        width: 100%;
        min-height: 43px;
        padding: 10px 15px;
        letter-spacing: .00625em;
        font-size: 1rem;
        outline: none;
        border: 0;
        font-weight: bold;
    }
    .desc-input {
        width: 100%;
        outline: none;
        resize: none;
        border: 0;
        font-size: 1rem;
        padding: 0 15px;
        font-family: inherit;
        transition: all 0.4s ease-in-out;
        word-break: break-all;
    }
    .footer-panel {
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        background-color: #fff;
        padding: 10px 5px;
    }
    .desc-action {
        height: 0;
        overflow: hidden;
        transition: all 0.4s ease-in-out;
        &.active {
            min-height: 10px;
            height: auto;
        }
    }
`;

export const StyledNoteFooter = styled("div")`
    width: 100%;
    border-top: 1px solid #6e6e6e;
    padding: 5px;
    margin-top: 5px;
    box-shadow: inset 0px 0px 8px -1px #000;
    svg {
        fill: #000;
    }
    .close-option {
        color: #6e6e6e;
        font-size: 14px;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
        transition: all 0.4s ease-in-out;
        &:hover {
            opacity: .87;
            background-color: rgba(95,99,104,0.157);
        }
    }
`;
