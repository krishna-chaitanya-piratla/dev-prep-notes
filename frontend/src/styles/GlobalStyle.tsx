import { createGlobalStyle } from 'styled-components';
import appStore from '../stores/AppStore';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-background-color: var(--background-color);
    --header-background-color: var(--background-color);
    --text-color: #ffffff;
    --main-nav-width: 280px;
    --page-nav-width: 320px;
    --page-width: 900px;
    --header-height: 2%;
    --font-family: ${appStore.fontFamily}; /* Font family */
    --base-text-size: ${appStore.fontSize}px; /* Font size */
    --base-line-height: calc(1.6 * var(--base-text-size));
    --navigation-text-size: calc(8 * var(--base-text-size) / 9);
    --navigation-line-height: calc(1.6 * var(--navigation-text-size));
    --link-base-color: #cccccc;
    --link-hover-color: #ffffff;
    --link-active-color: #ffffff;
    --nav-context-link-color: #999999;
    --nav-placeholder-color: #999999;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    font-size: var(--base-text-size); /* Root level font size */
    line-height: var(--base-line-height);
    background-color: var(--background-color);
    color: var(--text-color);
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
