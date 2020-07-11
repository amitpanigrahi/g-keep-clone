import styled from "styled-components";

export const StyledSidebar = styled("div")({
    ".item": {
        padding: "12.5px 25px",
        cursor: "pointer",
        "&.active": {
            borderRadius: "0 25px 25px 0",
            background: ({theme}) => theme.isLight ? "#feefc3" : "#41331c",
        },
        svg: {
            fill: ({theme}) => theme.text,
        },
        ".icon-wrap": {
            paddingRight: "20px",
        },
        ".label": {
            letterSpacing: ".01785714em",
            fontFamily: `'Google Sans',Roboto,Arial,sans-serif`,
            fontSize: ".875rem",
            fontWeight: "bold",
        }
    }
});
