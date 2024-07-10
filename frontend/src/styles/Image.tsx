import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
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
