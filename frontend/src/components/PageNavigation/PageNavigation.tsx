import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { PageNavigationWrapper, NavigationItem, PageNavigationHeader, Circle } from '../../styles/PageNavigation/PageNavigation';

const scrollToSection = (id: string, setSelectedId: React.Dispatch<React.SetStateAction<string | null>>) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = document.querySelector('header')?.clientHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offsetPosition = elementPosition + window.scrollY - headerOffset - (2 * remToPx); // 2rem gap

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Introduce a delay to allow scrolling to finish before updating the selectedId
    setTimeout(() => {
      setSelectedId(id);
    }, 1000); // Adjust the delay time as needed
  }
};

const PageNavigation: React.FC = observer(() => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headers = dataStore.currentPage.contents.flatMap(block =>
        block.contents.filter(content =>
          ['h1', 'h2'].includes(content.type)
        )
      );

      for (let i = 0; i < headers.length; i++) {
        const element = document.getElementById(headers[i].id!);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setSelectedId(headers[i].id!);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headers = dataStore.currentPage.contents.flatMap(block =>
    block.contents.filter(content =>
      ['h1', 'h2'].includes(content.type)
    ).map(content => ({
      id: content.id!,
      type: content.type,
      contents: content.contents
    }))
  );

  return (
    <PageNavigationWrapper>
      <PageNavigationHeader>Contents</PageNavigationHeader>
      <div>
        {headers.map(header => (
          <NavigationItem
            key={header.id}
            depth={header.type === 'h1' ? 0 : 1}
            isActive={selectedId === header.id}
            onClick={() => scrollToSection(header.id!, setSelectedId)}
          >
            <Circle isActive={selectedId === header.id} />
            {header.contents}
          </NavigationItem>
        ))}
      </div>
    </PageNavigationWrapper>
  );
});

export default PageNavigation;