import React from 'react';
import { PageNavigationWrapper } from '../styles/PageNavigation';

const PageNavigation: React.FC = () => {

  return (
    <PageNavigationWrapper>
      <h2>Contents</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </PageNavigationWrapper>
  );
};

export default PageNavigation;
