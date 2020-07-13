import styled from "styled-components";

export const Overlay = styled("div")`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.hiddenProp ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.hiddenProp ? '0' : '1')};
  cursor: pointer;
  &.mob-only {
    display: none;
  }
  @media screen and (max-width: 767px) {
    &.mob-only {
        display: flex;
    }
  }
`;

export const ModalContainer = styled("div")`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .children {
        position: relative;
        z-index: 11;
    }
    .close {
        margin: 10px 0;
    }
`;
