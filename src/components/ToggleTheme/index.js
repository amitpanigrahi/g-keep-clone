import React from 'react'
import styled from 'styled-components';
import {MOON_ICON, SUN_ICON} from "../../constants/imgMap";

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: transparent;
  height: 3.5rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  svg {
    width: 2.5rem;
    height: 100%;
    transition: all 0.3s linear;
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';

    return (
        <ToggleContainer className={"btn btn_hf"} lightTheme={isLight} onClick={toggleTheme} >
            {isLight ? MOON_ICON : SUN_ICON}
        </ToggleContainer>
    );
};

export default Toggle;
