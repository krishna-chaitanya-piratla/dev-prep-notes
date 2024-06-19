import { createGlobalStyle } from 'styled-components';
import appStore from '../stores/AppStore';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --page-background-color: #ffffff;
    --nav-background-color: var(--background-color);
    --header-background-color: var(--background-color);
    --text-color: #ffffff;
    --nav-width: 20%;
    --page-width: calc(100% - 2*var(--nav-width));
    --header-height: 3%;
    --font-family: ${appStore.fontFamily}; /* Font family */
    --base-text-size: 18px;
    --base-line-height: calc(1.6*var(--base-text-size));
    --navigation-text-size: calc(8*var(--base-text-size)/9);
    --navigation-line-height: calc(1.6*var(--navigation-text-size));
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
