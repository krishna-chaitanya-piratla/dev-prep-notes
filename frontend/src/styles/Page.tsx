import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: var(--page-background-color);
  color: black;
  font-size: 1.25rem;
  flex-grow: 1; /* Let it take remaining space */
  min-height: 100vh;
  padding: 1.25rem;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
