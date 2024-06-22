import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { HeaderWrapper, TitleContainer, SettingsIconWrapper } from '../../styles/Header/Header';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from './SettingsMenu';
import { Page } from '../../types/Page';

const findPageById = (id: string, pages: (Page & { children: any[] })[]): (Page & { children: any[] }) | null => {
  for (const page of pages) {
    if (page.metadata.id === id) {
      return page;
    }
    const found = findPageById(id, page.children);
    if (found) {
      return found;
    }
  }
  return null;
};

const getBreadcrumbPath = (currentPage: Page, pages: (Page & { children: any[] })[]): string => {
  let path = currentPage.metadata.linkName;
  let parentId = currentPage.metadata.parentId;

  while (parentId) {
    const parentPage = findPageById(parentId, pages);
    if (parentPage) {
      path = `${parentPage.metadata.linkName} / ${path}`;
      parentId = parentPage.metadata.parentId;
    } else {
      break;
    }
  }

  return path;
};

const Header: React.FC = observer(() => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  const breadcrumbPath = getBreadcrumbPath(dataStore.currentPage, dataStore.pageTree);

  return (
    <>
      <HeaderWrapper>
        <TitleContainer>
          <p>{breadcrumbPath}</p>
        </TitleContainer>
        <SettingsIconWrapper onClick={() => setIsSettingsMenuOpen(true)}>
          <SettingsIcon />
        </SettingsIconWrapper>
      </HeaderWrapper>
      {isSettingsMenuOpen && <SettingsMenu onClose={() => setIsSettingsMenuOpen(false)} />}
    </>
  );
});

export default Header;
