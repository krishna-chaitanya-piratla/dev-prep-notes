import styled from 'styled-components';

export const CodeBlockContainer = styled.div`
  display: flex;
  max-width: 95%;
  flex-direction: column;
  background: #f5f6f9;
  margin: 2rem 0;
  border-radius: 1rem;
`;

export const CodeBlockHeader = styled.div`
  border-radius: 1rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background: inherit;
  color: inherit;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.5rem 1.75rem;
  box-sizing: border-box;
`;

export const CodeBlockWrapper = styled.div`
  font-size: calc(0.95 * var(--base-text-size));
  letter-spacing: -0.25px;
  width: 100%; /* Ensure it matches the header width */
  margin: 0;
`;
