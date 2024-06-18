import { createGlobalStyle } from 'styled-components';
import appStore from '../stores/AppStore';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-background-color: var(--background-color);
    --header-background-color: var(--background-color);
    --text-color: #ffffff;
    --nav-width: 15%;
    --page-width: calc(100% - var(--nav-width));
    --header-height: 5rem; /* Header height */
    --font-family: ${appStore.fontFamily}; /* Font family */
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    font-size: 16px; /* Root level font size */
    background-color: var(--background-color);
    color: var(--text-color);
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
