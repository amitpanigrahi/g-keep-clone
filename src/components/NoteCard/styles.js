import styled from "styled-components";

export const StyledNoteCard = styled("div")`
    margin: 16px;
    border-radius: 8px;
    transition-duration: .5s;
    width: 240px;
    border: 1px solid transparent;
    background: ${({theme}) => theme.isLight ? "#fff" : "#202124"};
    border-color: ${({theme}) => theme.isLight ? "#e0e0e0" : "#5f6368"};
    overflow: hidden;
    padding: 15px;
    .title {
        letter-spacing: .00625em;
        font-family: 'Google Sans',Roboto,Arial,sans-serif;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5rem;
        margin-bottom: 15px;
    }
    &:hover {
        cursor: pointer;
        box-shadow:  ${({theme}) => theme.isLight ? "0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)" :
    "0 1px 2px 0 rgba(360, 360, 360, 0.2), 0 1px 3px 1px rgba(360, 360, 360, 0.5)"};
    }
`;
