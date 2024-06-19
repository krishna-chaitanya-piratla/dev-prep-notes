import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 1rem; /* Adjust if necessary to align with header */
  justify-content: space-between;
`;

export const AppContainer = styled.div`
  background-color: var(--background-color);
  margin: 0 1rem; /* Adjust this value as needed */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: var(--page-width);

`;
