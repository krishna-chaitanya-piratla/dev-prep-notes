import React from 'react';
import { NavigationWrapper } from '../styles/Navigation';

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <h2>Navigation</h2>
      <ul>
        <li>Home</li>
        <li>Notes</li>
        <li>Settings</li>
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
