import React, { useState } from 'react';
import { PageNavigationWrapper } from '../styles/PageNavigation';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from './SettingsMenu';

const PageNavigation: React.FC = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  return (
    <PageNavigationWrapper>
      <h2>Contents</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      {isSettingsMenuOpen && <SettingsMenu onClose={() => setIsSettingsMenuOpen(false)} />}
    </PageNavigationWrapper>
  );
};

export default PageNavigation;
