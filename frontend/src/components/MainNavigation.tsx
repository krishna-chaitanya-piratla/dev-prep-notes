import React from 'react';
import { MainNavigationWrapper } from '../styles/MainNavigation';

const MainNavigation: React.FC = () => {
  return (
    <MainNavigationWrapper>
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
