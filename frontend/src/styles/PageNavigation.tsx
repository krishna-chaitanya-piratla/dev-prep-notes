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

export const FontSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;

  select {
    border: none;
    background: none;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    width: auto; /* Make sure select element has auto width */
  }
`;
