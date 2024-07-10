import styled from 'styled-components';
import { Resizable } from 're-resizable';

interface ImageWrapperProps {
  alignment: 'left' | 'center' | 'right';
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  justify-content: ${({ alignment }) =>
    alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center'};
  margin: 1rem 0;
`;

export const StyledResizable = styled(Resizable)`
  position: relative;
  display: inline-block;
`;

interface CustomHandleProps {
  visible: boolean;
  position: 'right' | 'left';
}

export const CustomHandle = styled.div<CustomHandleProps>`
  background: #ccc;
  width: 0.25rem;
  height: 20%;
  top: 40%;
  position: absolute;
  transition: opacity 0.2s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: 1;

  ${({ position }) => (position === 'right' ? 'right: 0; cursor: ew-resize;' : 'left: 0; cursor: ew-resize;')}
`;
