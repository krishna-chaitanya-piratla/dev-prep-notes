import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import {
  HeaderWrapper,
  TitleContainer,
  SettingsIconWrapper,
  BreadcrumbContainer,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbCurrent
} from '../../styles/Header/Header';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from './SettingsMenu';
import { Page, PageWithChildren } from '../../types/Page';

// Helper function to find a page by its ID in a nested structure
const findPageById = (id: string, pages: PageWithChildren[]): PageWithChildren | null => {
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

// Function to construct the breadcrumb path
const getBreadcrumbPath = (currentPage: PageWithChildren, pages: PageWithChildren[]): PageWithChildren[] => {
  const path = [currentPage];
  let parentId = currentPage.metadata.parentId;

  while (parentId) {
    const parentPage = findPageById(parentId, pages);
    if (parentPage) {
      path.unshift(parentPage);
      parentId = parentPage.metadata.parentId;
    } else {
      break;
    }
  }

  return path;
};

const Header: React.FC = observer(() => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  const breadcrumbPath = getBreadcrumbPath(dataStore.currentPage as PageWithChildren, dataStore.pageTree);

  const handlePageClick = (page: Page) => {
    dataStore.setPage(page);
  };

  return (
    <>
      <HeaderWrapper>
        <TitleContainer>
          <BreadcrumbContainer>
            {breadcrumbPath.map((page, index) => (
              <React.Fragment key={page.metadata.id}>
                {index < breadcrumbPath.length - 1 ? (
                  <>
                    <BreadcrumbLink href="#" onClick={() => handlePageClick(page)}>
                      {page.metadata.linkName.length > 20 ? `${page.metadata.linkName.substring(0, 20)}...` : page.metadata.linkName}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator sx={{ fontSize: 'inherit', transform: 'scale(1.5)' }} />
                  </>
                ) : (
                  <BreadcrumbCurrent>{page.metadata.linkName}</BreadcrumbCurrent>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbContainer>
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
