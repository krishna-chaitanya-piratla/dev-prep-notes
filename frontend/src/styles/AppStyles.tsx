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
`;

export const AppContainer = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const PageContainer = styled.div<{ isMinimized?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: ${({ isMinimized = true }) => isMinimized ? 'calc(100% - var(--main-nav-width) - var(--page-nav-minimized-width))' : 'calc(100% - var(--main-nav-width) - var(--page-nav-expanded-width))'};
  max-width: var(--page-width);  /* Ensure the container doesn't grow beyond this width */
  box-sizing: border-box;

  @media (max-width: 1540px) {
    flex-basis: calc(100% - var(--main-nav-width));
  }

  @media (max-width: 1240px) {
    width: auto;
    margin-left: 20px;
    margin-right: 40px;
  }

  @media (max-width: 940px) {
    flex-basis: 100%;
  }
`;
