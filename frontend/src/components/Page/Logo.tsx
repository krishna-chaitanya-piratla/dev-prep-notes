import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  font-size: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LogoProps {
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return <StyledLogo>{logo}</StyledLogo>;
};

export default Logo;
