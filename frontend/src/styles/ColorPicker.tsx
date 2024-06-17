import styled from 'styled-components';


export const ColorPickerWrapper = styled.div`
  display: flex;
  margin-left: auto; /* Push to the right */
  background-color: white;
`;

export const ColorDiv = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  margin: 0.25rem;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;