import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { PageNavigationWrapper, NavigationItem, ContentsHeader } from '../../styles/PageNavigation/PageNavigation';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  console.log(`Scrolling to element with id: ${id}`);
  if (element) {
    const headerOffset = document.querySelector('header')?.clientHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offsetPosition = elementPosition + window.scrollY - headerOffset - (2 * remToPx); // 2rem gap

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const PageNavigation: React.FC = observer(() => {
  const headers = dataStore.currentPage.contents.flatMap(block =>
    block.contents.filter(content =>
      ['h1', 'h2'].includes(content.type) // Exclude h3
    ).map(content => ({
      id: content.id,
      type: content.type,
      contents: content.contents
    }))
  );

  return (
    <PageNavigationWrapper>
      <ContentsHeader>Contents</ContentsHeader>
      <div>
        {headers.map(header => (
          <NavigationItem
            key={header.id}
            depth={header.type === 'h1' ? 0 : 1} // Adjust depth since we only have h1 and h2
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
