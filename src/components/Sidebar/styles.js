import styled from "styled-components";

export const StyledSidebar = styled("div")({
    height: "100%",
    transition: "all 0.5s ease-in-out",
    minWidth: ({ isExpanded }) => isExpanded ? "100px" : "40px",
    background: ({ theme }) => theme.body,
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
    },
    '@media(max-width: 767px)': {
        position: "absolute",
        transition: "0.5s ease-in-out",
        opacity: ({ isExpanded }) => isExpanded ? 1 : 0,
        zIndex: ({ isExpanded }) => isExpanded ? 11 : -1,
        top: 0,
        paddingTop: "40px",
    }
});
