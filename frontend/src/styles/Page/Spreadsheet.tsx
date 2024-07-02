import styled from 'styled-components';

export const SpreadsheetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledSpreadsheet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;

  .reactgrid {
    width: 100%;  /* Ensure reactgrid takes full width of the container */
  }
`;
