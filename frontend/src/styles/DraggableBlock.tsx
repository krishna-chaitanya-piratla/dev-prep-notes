import styled from 'styled-components';

export const DraggableBlockWrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  position: relative;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  
  & > *:not(:first-child) {
    flex-grow: 1;
    width: 100%;
  }
`;

export const DragHandle = styled.div`
  width: 10px;
  height: 100%;
  background-color: #ccc;
  cursor: grab;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 1;
  margin-left: -2rem;

  &:active {
    cursor: grabbing;
  }
  
  ${DraggableBlockWrapper}:hover & {
    opacity: 1;
  }
`;
