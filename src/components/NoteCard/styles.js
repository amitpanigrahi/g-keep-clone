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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
            letter-spacing: .00625em;
            font-family: 'Google Sans',Roboto,Arial,sans-serif;
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.5rem;
            margin-bottom: 15px;
        }
        .info-box {
            padding: 15px;
        }
        .desc {
            word-break: break-all;
        }
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }   
    @media screen and (min-width: 1024px) {
        .action-panel {
            opacity: 0;
            visibility: none;
            transition: 0.5s ease-in-out;
            svg {
                height: 16px;
            }
        }
        &:hover {
            cursor: pointer;
            .action-panel {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;
