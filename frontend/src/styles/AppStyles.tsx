import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 99vw;
  padding; 0;
  margin; 0;


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

  @media (max-width: 1240px) {
    width: auto;
    margin-left: 20px;
    margin-right: 40px;
  }
`;
