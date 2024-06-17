import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-theme-color: #000000;
    --nav-background-color: var(--nav-theme-color);
    --header-background-color: var(--nav-theme-color);
    --text-color: #ffffff;
    --nav-width: 15%;
    --page-width: calc(100% - var(--nav-width));
    --header-height: 5rem; /* Header height */
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
    flex-direction: column;
  }
`;
