import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { MainNavigationWrapper, IconContainer, LinkItem, ExpandIcon, LinkText, NoPagesPlaceholder } from '../styles/MainNavigation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const renderPageTree = (pages: any[], depth: number = 0, hoveredItem: string | null, setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>) => {
  return pages.map((page) => (
    <React.Fragment key={page.metadata.link}>
      <LinkItem
        onClick={() => dataStore.setPage(page)}
        isActive={dataStore.currentPage.metadata.link === page.metadata.link}
        depth={depth}
        hasChildren={page.children.length > 0}
        isHovered={hoveredItem === page.metadata.link}
        onMouseEnter={() => setHoveredItem(page.metadata.link)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <ExpandIcon
          isHovered={hoveredItem === page.metadata.link}
          onClick={(e) => { e.stopPropagation(); dataStore.toggleExpand(page.metadata.id); }}
        >
          {dataStore.isExpanded(page.metadata.id) ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </ExpandIcon>
        <LinkText>{page.metadata.linkName}</LinkText>
      </LinkItem>
      {dataStore.isExpanded(page.metadata.id) && (
        page.children.length > 0 ? (
          renderPageTree(page.children, depth + 1, hoveredItem, setHoveredItem)
        ) : (
          <NoPagesPlaceholder depth={depth + 1}>
            No pages inside
          </NoPagesPlaceholder>
        )
      )}
    </React.Fragment>
  ));
};

const MainNavigation: React.FC = observer(() => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <h2>Main Navigation</h2>
      <div>{renderPageTree(dataStore.pageTree, 0, hoveredItem, setHoveredItem)}</div>
    </MainNavigationWrapper>
  );
});

export default MainNavigation;
