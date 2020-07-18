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
    background-color: ${({theme}) => theme.isLight ? "#fff" : "#202124"};
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
        background-color: ${({theme}) => theme.isLight ? "#fff" : "#202124"};
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
