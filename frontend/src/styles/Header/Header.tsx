import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--header-background-color);
  color: var(--text-color);
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between title and settings icon */
  padding: 0 1rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  flex-grow: 1; /* Allow it to grow and take available space */
  display: flex;
  justify-content: center; /* Center the title horizontally */
  align-items: center; /* Center the title vertically */
`;

export const SettingsIconWrapper = styled.div`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;

  & > svg {
    font-size: 1.5rem;
    color: var(--text-color);
  }
`;
