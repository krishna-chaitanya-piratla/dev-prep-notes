import styled from 'styled-components';

interface ImageWrapperProps {
  alignment: 'left' | 'center' | 'right';
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  justify-content: ${({ alignment }) =>
    alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center'};
  margin: 1rem 0;
`;

export const ResizeHandle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  right: 0;
  cursor: se-resize;
  z-index: 10;
`;
