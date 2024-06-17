import styled from 'styled-components';

export const PageNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--nav-width);
  height: 100vh;
  padding: 1.25rem; /* 20px */
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const ColorPickerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: white;
  width: fit-content;
`;

export const ColorDiv = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  margin: 0.25rem;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;
