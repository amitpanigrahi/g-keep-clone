import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    overflow: hidden;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .cursor {
    &_pointer {
        cursor: pointer;   
    }
  }
  .d {
    &_flex {
        display: flex;
    }
  }
  .align {
    &_items {
        &_center {
            align-items: center;
        }
    }
  }
  .justify {
    &_content {
        &_center {
            justify-content: center;
        }
        &_between {
            justify-content: space-between;
        }
    }
  }
  .display-body {
    height: 90vh;
    max-height: calc(100% - 70vh);
  }
  .box {
    box-shadow:  ${({theme}) => theme.isLight ? "0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)" :
    "0 1px 2px 0 rgba(360, 360, 360, 0.2), 0 1px 3px 1px rgba(360, 360, 360, 0.5)"};
  }
  .flex {
    &_column {
        flex-direction: column;
    }
  }
  .btn {
    background: transparent;
    outline: none;
    &_hf {
        &:hover, 
        &:focus {
            opacity: .87;
            background-color: rgba(95,99,104,0.157);
        }
    }
  }
  .border {
    &_none {
        border: none;
    }
  }
  input,
  textarea {
    color: ${({theme}) => theme.text};
    caret-color: ${({theme}) => theme.isLight ? "#000" : "#fff"};
    background: ${({theme}) => theme.isLight ? "#fff" : "#202124"};
  }
  .w {
    &-100 {
        width: 100%;
    }
  }
`;
