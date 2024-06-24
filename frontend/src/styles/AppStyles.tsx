import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;


  @media (max-width: 1540px) {
    justify-content: left;
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 0; /* Adjust if necessary to align with header */
  justify-content: space-between;
`;

export const AppContainer = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
  
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: var(--page-width);
  box-sizing: border-box; /* Include padding and border in element's total width and height */
`;
