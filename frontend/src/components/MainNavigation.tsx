import React from 'react';
import { MainNavigationWrapper, IconContainer } from '../styles/MainNavigation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MainNavigation: React.FC = () => {
  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <h2>Main Navigation</h2>
      <ul>
        <li>Home</li>
        <li>Notes</li>
        <li>Settings</li>
      </ul>
    </MainNavigationWrapper>
  );
};

export default MainNavigation;
