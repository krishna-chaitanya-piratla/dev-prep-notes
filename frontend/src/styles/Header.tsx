import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--header-background-color);
  color: var(--text-color);
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* Center items horizontally */
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto; /* Push to the left */
  & > svg {
    margin-right: 1rem;
  }
`;

export const TitleContainer = styled.div`
  flex-grow: 1; /* Allow it to grow and take available space */
  display: flex;
  justify-content: center; /* Center the title horizontally */
  align-items: center; /* Center the title vertically */
`;
