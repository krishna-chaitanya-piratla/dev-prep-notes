import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: 20%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

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
