import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
