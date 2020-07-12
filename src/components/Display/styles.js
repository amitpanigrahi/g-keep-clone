import styled from "styled-components";

export const StyledDisplayWrapper = styled("div")`
    max-height: 100%;
    overflow: auto;
    padding-top: 20px;
    width: 100%;
`;
export const StyledNoteListContainer = styled("div")`
   flex-direction: column;
   .headline {
        margin-left: 16px;
        font-weight: bold;
        letter-spacing: 1px;
   }
   .cards-container {
        display: felx;
        flex-wrap: wrap;
   }
`;
