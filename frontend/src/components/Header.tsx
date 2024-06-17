import React from 'react';
import { HeaderWrapper, TitleContainer } from '../styles/Header';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TitleContainer>
        <h1>Dev Notes</h1>
      </TitleContainer>
    </HeaderWrapper>
  );
};

export default Header;
