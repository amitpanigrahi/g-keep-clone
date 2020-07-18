import styled from "styled-components";

export const StyledActionControlPanel = styled("div")`
    width: 100%;
    border-top: 1px solid #6e6e6e;
    padding: 5px;
    margin-top: 5px;
    svg {
        fill: ${({theme}) => theme.text};
        path:nth-child(2) {
            fill: ${({theme}) => theme.text};
        }
    }
    .close-option {
        color: ${({theme}) => theme.text};
        font-size: 14px;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
        transition: all 0.4s ease-in-out;
    }
`;
