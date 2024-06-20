import React, { useState } from 'react';
import { HeaderWrapper, TitleContainer, SettingsIconWrapper } from '../../styles/Header/Header';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from './SettingsMenu';

const Header: React.FC = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <TitleContainer>
          <h1>Dev Notes</h1>
        </TitleContainer>
        <SettingsIconWrapper onClick={() => setIsSettingsMenuOpen(true)}>
          <SettingsIcon />
        </SettingsIconWrapper>
      </HeaderWrapper>
      {isSettingsMenuOpen && <SettingsMenu onClose={() => setIsSettingsMenuOpen(false)} />}
    </>
  );
};

export default Header;
