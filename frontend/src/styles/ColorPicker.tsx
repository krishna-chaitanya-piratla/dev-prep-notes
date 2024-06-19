import styled from 'styled-components';


export const ColorPickerWrapper = styled.div`
  display: flex;
  align-items: center;
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