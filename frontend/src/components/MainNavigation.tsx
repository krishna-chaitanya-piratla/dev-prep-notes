// src/components/MainNavigation.tsx

import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { MainNavigationWrapper, IconContainer, LinkItem } from '../styles/MainNavigation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MainNavigation: React.FC = observer(() => {
  const { pages, setPage, currentPage } = dataStore;

  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <h2>Main Navigation</h2>
      <div>
        {pages.map((page) => (
          <LinkItem
            key={page.metadata.link}
            onClick={() => setPage(page)}
            isActive={currentPage.metadata.link === page.metadata.link}
          >
            {page.metadata.linkName}
          </LinkItem>
        ))}
      </div>
    </MainNavigationWrapper>
  );
});

export default MainNavigation;
