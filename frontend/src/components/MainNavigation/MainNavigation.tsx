import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import mainNavigationStore from '../../stores/MainNavigationStore';
import { PageWithChildren } from '../../types/Page';
import {
  MainNavigationWrapper,
  IconContainer,
  LinkItem,
  ExpandIcon,
  LinkText,
  NoPagesPlaceholder,
  MainNavigationHeader,
  NavigationLogo,
  EmojiPickerWrapper
} from '../../styles/MainNavigation/MainNavigation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

interface NavigationItemProps {
  page: PageWithChildren;
  depth: number;
}

const NavigationItem: React.FC<NavigationItemProps> = observer(({ page, depth }) => {
  const logo = dataStore.getLogo(page.metadata.id);
  const isExpanded = mainNavigationStore.isExpanded(page.metadata.id);

  return (
    <>
      <LinkItem
        onClick={() => {
          dataStore.setPage(page);
        }}
        isActive={dataStore.currentPage.metadata.link === page.metadata.link}
        depth={depth}
        hasChildren={page.children.length > 0}
      >
        <ExpandIcon
          onClick={(e) => {
            e.stopPropagation();
            mainNavigationStore.toggleExpand(page.metadata.id);
          }}
        >
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </ExpandIcon>
        {logo && <NavigationLogo onClick={(e) => {
          e.stopPropagation();
          mainNavigationStore.showEmojiPicker(page.metadata.id, { x: e.clientX, y: e.clientY });
        }}>{logo}</NavigationLogo>}
        <LinkText>{page.metadata.linkName}</LinkText>
      </LinkItem>
      {isExpanded && (
        <>
          {page.children.length > 0 ? (
            <RenderPageTree pages={page.children} depth={depth + 1} />
          ) : (
            <NoPagesPlaceholder depth={depth + 1}>
              No pages inside
            </NoPagesPlaceholder>
          )}
        </>
      )}
    </>
  );
});

const RenderPageTree: React.FC<{ pages: PageWithChildren[], depth?: number }> = observer(({ pages, depth = 0 }) => {
  return (
    <>
      {pages.map((page) => (
        <NavigationItem key={page.metadata.link} page={page} depth={depth} />
      ))}
    </>
  );
});

const MainNavigation: React.FC = observer(() => {
  const handleEmojiSelect = (emoji: any) => {
    if (mainNavigationStore.pickerPageId) {
      dataStore.setLogoForPage(mainNavigationStore.pickerPageId, emoji.native);
      mainNavigationStore.hideEmojiPicker();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (mainNavigationStore.pickerPosition) {
      mainNavigationStore.hideEmojiPicker();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <MainNavigationHeader>Main Navigation</MainNavigationHeader>
      <div>
        <RenderPageTree pages={mainNavigationStore.pageTree} />
      </div>
      {mainNavigationStore.pickerPosition && (
        <EmojiPickerWrapper style={{ top: mainNavigationStore.pickerPosition.y, left: mainNavigationStore.pickerPosition.x }}>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </EmojiPickerWrapper>
      )}
    </MainNavigationWrapper>
  );
});

export default MainNavigation;
