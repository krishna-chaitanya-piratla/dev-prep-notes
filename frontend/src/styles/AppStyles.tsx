import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 1540px) {
    justify-content: left;
  }

  @media (max-width: 1240px) {
    justify-content: center;
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 0;
  justify-content: space-between;
  width: 100%; /* Ensure the layout takes full width */
`;

export const AppContainer = styled.div`
  display: flex; /* Make it a flex container */
  background-color: var(--background-color);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const PageContainer = styled.div<{ isMinimized?: boolean }>`
  flex-grow: 1; /* Allow it to take up the remaining space */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden; /* Prevent content from causing overflow */
  width: ${({ isMinimized = true }) => isMinimized ? `calc(100% - var(--main-nav-width) - var(--page-nav-minimized-width))` : `calc(100% - var(--main-nav-width) - var(--page-nav-expanded-width))`}; /* Calculate width dynamically */

  @media (max-width: 1540px) {
    width: calc(100% - var(--main-nav-width));
  }

  @media (max-width: 1240px) {
    width: auto;
    margin-left: 20px;
    margin-right: 40px;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
`;
