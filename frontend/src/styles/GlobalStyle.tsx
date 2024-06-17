import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-background-color: #333333;
    --text-color: #ffffff;
    --nav-width: 20%;
    --page-width: calc(100% - var(--nav-width));
  }

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px; /* Root level font size */
    background-color: var(--background-color);
    color: var(--text-color);
  }

  #root {
    display: flex;
  }
`;
