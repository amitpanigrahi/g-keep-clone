import styled from "styled-components";

export const StyledHeaderWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    padding: "8px",
    transition: "background-color .4s",
    minWidth: "min-content",
    boxShadow: "inset 0 -1px 0 0 #5f6368",
    ".burger-title": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".title": {
            fontSize: "22px",

        }
    }
});
