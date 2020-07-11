import React from "react";
import NoteCard from "../NoteCard";
import {StyledCardContainer} from "./styles";

const Display = () => {
    return (
        <StyledCardContainer className={"d_flex justify_content_center"}>
            {[...new Array(20)].map((val, i) => <NoteCard key={i}/>)}
        </StyledCardContainer>
    )
};

export default Display;
