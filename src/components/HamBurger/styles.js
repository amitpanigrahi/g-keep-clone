import styled from "styled-components";

export const StyledHamBurger = styled("div")`
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    padding: 10px;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity,filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    position: relative;
    .hamburger-box {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 15px;
        .hamburger-inner {
            top: 2px;
            &::before,
            &::after {
                content: "";
                display: block;
            }
            &::before {
                top: 5px;
                transition-timing-function: ease;
                transition-duration: .15s;
                transition-property: transform,opacity;
            }
            &::after {
                top: 10px;
                bottom: 10px;
            }
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
            
            position: absolute;
            width: 25px;
            height: 2px;
            transition-timing-function: ease;
            transition-duration: .15s;
            transition-property: transform;
            border-radius: 4px;
            background-color: ${({ theme }) => theme.text};
        }
    }
    &.is-active {
        .hamburger-box {
            top: -5px;
        }
        .hamburger-inner {
            transform: translate3d(0,10px,0) rotate(45deg);
            &::before {
                transform: rotate(-45deg) translate3d(-5.71429px,-6px,0);
                opacity: 0;
            }
            &::after {
                transform: translate3d(0,-20px,0) rotate(-90deg);
                top: 20px;
                bottom: -10px;
                display: block;
                content: "";
            }
        }
    }
`;
