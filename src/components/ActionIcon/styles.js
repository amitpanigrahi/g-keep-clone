import styled from "styled-components";

export const StyledIcon = styled("div")`
    border-radius: 50%;
    margin-right: 5px;
    padding: 5px 7px;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    &:hover {
        opacity: .87;
        background-color: rgba(95,99,104,0.157);
    }
`;
