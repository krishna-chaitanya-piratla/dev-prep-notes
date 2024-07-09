import React, { useState, useCallback, useEffect, memo, MouseEvent as ReactMouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
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
  showEmojiPicker: (pageId: string, event: ReactMouseEvent) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = memo(observer(({ page, depth, showEmojiPicker }) => {
  const logo = dataStore.getLogo(page.metadata.id);
  const isExpanded = dataStore.isExpanded(page.metadata.id);
  console.log(`Rendering page: ${page.metadata.linkName}, logo: ${logo}, isExpanded: ${isExpanded}`);

  return (
    <>
      <LinkItem
        onClick={() => {
          console.log(`Navigating to page: ${page.metadata.linkName}`);
          dataStore.setPage(page);
        }}
        isActive={dataStore.currentPage.metadata.link === page.metadata.link}
        depth={depth}
        hasChildren={page.children.length > 0}
      >
        <ExpandIcon
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Toggling expand for page: ${page.metadata.linkName}`);
            dataStore.toggleExpand(page.metadata.id);
          }}
        >
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </ExpandIcon>
        {logo && <NavigationLogo onClick={(e) => showEmojiPicker(page.metadata.id, e)}>{logo}</NavigationLogo>}
        <LinkText>{page.metadata.linkName}</LinkText>
      </LinkItem>
      {isExpanded && (
        <>
          {page.children.length > 0 ? (
            <RenderPageTree pages={page.children} depth={depth + 1} showEmojiPicker={showEmojiPicker} />
          ) : (
            <NoPagesPlaceholder depth={depth + 1}>
              No pages inside
            </NoPagesPlaceholder>
          )}
        </>
      )}
    </>
  );
}));

interface RenderPageTreeProps {
  pages: PageWithChildren[];
  depth?: number;
  showEmojiPicker: (pageId: string, event: ReactMouseEvent) => void;
}

const RenderPageTree: React.FC<RenderPageTreeProps> = observer(({ pages, depth = 0, showEmojiPicker }) => {
  return (
    <>
      {pages.map((page) => (
        <NavigationItem key={page.metadata.link} page={page} depth={depth} showEmojiPicker={showEmojiPicker} />
      ))}
    </>
  );
});

const MainNavigation: React.FC = observer(() => {
  const [pickerPosition, setPickerPosition] = useState<{ x: number; y: number } | null>(null);
  const [pickerPageId, setPickerPageId] = useState<string | null>(null);

  const showEmojiPicker = useCallback((pageId: string, event: ReactMouseEvent) => {
    event.stopPropagation();
    console.log(`Showing emoji picker for page: ${pageId}`);
    setPickerPageId(pageId);
    setPickerPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleEmojiSelect = useCallback((emoji: any) => {
    if (pickerPageId) {
      console.log(`Selected emoji: ${emoji.native} for page: ${pickerPageId}`);
      dataStore.setLogoForPage(pickerPageId, emoji.native);
      setPickerPageId(null);
      setPickerPosition(null);
    } else {
      console.log('Picker page ID is null.');
    }
  }, [pickerPageId]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (pickerPosition) {
      console.log('Click outside emoji picker, closing picker.');
      setPickerPageId(null);
      setPickerPosition(null);
    }
  }, [pickerPosition]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <MainNavigationWrapper>
      <IconContainer>
        <KeyboardArrowLeftIcon />
        <HomeIcon />
        <KeyboardArrowRightIcon />
      </IconContainer>
      <MainNavigationHeader>Main Navigation</MainNavigationHeader>
      <div>
        <RenderPageTree pages={dataStore.pageTree} showEmojiPicker={showEmojiPicker} />
      </div>
      {pickerPosition && (
        <EmojiPickerWrapper style={{ top: pickerPosition.y, left: pickerPosition.x }}>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </EmojiPickerWrapper>
      )}
    </MainNavigationWrapper>
  );
});

export default MainNavigation;
