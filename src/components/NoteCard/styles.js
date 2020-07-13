import styled from "styled-components";

export const StyledNoteCard = styled("div")`
    padding: 16px;
    width: 240px;
    .card {
        border-radius: 8px;
        transition-duration: .5s;
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
        .desc {
            word-break: break-all;
        }
        &:hover {
            cursor: pointer;
        }
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
