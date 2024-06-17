import React from 'react';
import { HeaderWrapper, IconContainer } from '../styles/Header';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
