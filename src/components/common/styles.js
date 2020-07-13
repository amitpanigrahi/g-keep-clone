import styled from "styled-components";

export const StyledNoDataWrapper = styled("div")`
    width: 100%;
    padding: 15px 0;
    text-align: center;
    height: 100%;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: lighter;
    letter-spacing: 1px;
    text-shadow: 3px 4px 10px #000;
    svg {
        height: 200px;
        width: 200px;
        fill: ${({theme}) => theme.text};
    }
`;
