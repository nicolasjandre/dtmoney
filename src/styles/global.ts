import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1190px) {
      font-size: 87.5%;
    }

    @media (max-width: 745px) {
      font-size: 75%;
    }

    @media (max-width: 620px) {
      font-size: 62.5%;
    }
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;

    background-color: #E5E5E5;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    background-color: #E5E5E5;
    border-radius: 5px;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
    background-color: transparent;

    transition: filter .2s
    ;
    &:hover {
      filter: brightness(0.8);
    }
  }
`