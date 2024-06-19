import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { MainNavigationWrapper, IconContainer, LinkItem } from '../styles/MainNavigation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const renderPageTree = (pages: any[], depth: number = 0) => {
  return pages.map((page) => (
    <React.Fragment key={page.metadata.link}>
      <LinkItem
        onClick={() => dataStore.setPage(page)}
        isActive={dataStore.currentPage.metadata.link === page.metadata.link}
        depth={depth}
      >
        {page.metadata.linkName}
      </LinkItem>
      {page.children.length > 0 && renderPageTree(page.children, depth + 1)}
    </React.Fragment>
  ));
};

const MainNavigation: React.FC = observer(() => {
  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <h2>Main Navigation</h2>
      <div>{renderPageTree(dataStore.pageTree)}</div>
    </MainNavigationWrapper>
  );
});

export default MainNavigation;
