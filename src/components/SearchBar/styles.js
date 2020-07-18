import styled from "styled-components";

export const StyledSearchBar = styled("div")`
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: 
    overflow: hidden;
    background: rgba(241,243,244, ${({theme}) => theme.isLight ? "1" : "0.24"});
    border-radius: 8px;
    border: 1px solid transparent;
    transition: background 100ms ease-in,width 100ms ease-out;
    flex: 1 1 auto;
    width: 100%;
    padding: 0 10px;
    margin: 0 10px;
    max-width: 720px;
    &.focus {
        box-shadow: 0 1px 1px 0 rgba(65,69,73,0.3), 0 1px 3px 1px rgba(65,69,73,0.15);
        background: rgba(255,255,255,1);     
        &.focus {
            input {
                color: #1e1e1e;
            }
        }
        svg {
            fill: #000;
        }
    }
    svg {
        fill: ${({theme}) => theme.text};
    }
`;

export const StyledInputContainer = styled("div")`
    width: 100%;
    input {
        background: transparent;
        border: none;
        font: normal 16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
        -webkit-font-variant-ligatures: none;
        color: ${({theme}) => theme.text};
        caret-color: #000;
        font-variant-ligatures: none;
        height: 46px;
        outline: none;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 10px;
    }
`;
