import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-background-color: #333333;
    --text-color: #ffffff;
  }

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  #root {
    display: flex;
  }
`;
