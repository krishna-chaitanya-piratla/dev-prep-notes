import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { PageNavigationWrapper, NavigationItem } from '../styles/PageNavigation';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  console.log(`Scrolling to element with id: ${id}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const PageNavigation: React.FC = observer(() => {
  const headers = dataStore.currentPage.contents.flatMap(block =>
    block.contents.filter(content =>
      ['h1', 'h2', 'h3'].includes(content.type)
    ).map(content => ({
      id: content.id,
      type: content.type,
      contents: content.contents
    }))
  );

  return (
    <PageNavigationWrapper>
      <h2>Contents</h2>
      <div>
        {headers.map(header => (
          <NavigationItem
            key={header.id}
            depth={header.type === 'h1' ? 0 : header.type === 'h2' ? 1 : 2}
            onClick={() => scrollToSection(header.id!)}
          >
            {header.contents}
          </NavigationItem>
        ))}
      </div>
    </PageNavigationWrapper>
  );
});

export default PageNavigation;
