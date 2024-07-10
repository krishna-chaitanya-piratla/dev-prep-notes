import React, { useEffect, useState, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import appStore from '../../stores/AppStore';
import {
  PageNavigationWrapper,
  NavigationItem,
  PageNavigationHeader,
  PageNavigationToggle,
  MinimizedPageNavigationWrapper
} from '../../styles/PageNavigation/PageNavigation';
import { Content, TextContent, CodeBlockContent, CalloutBoxContent } from '../../types/Page';

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

    setTimeout(() => {
      setSelectedId(id);
    }, 1000);
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
      ['h1', 'h2'].includes((content as TextContent).type)
    ).map(content => ({
      id: (content as TextContent).id!,
      type: (content as TextContent).type,
      contents: (content as TextContent).contents
    }))
  );

  const renderContent = (content: string | Content[]): ReactNode => {
    if (typeof content === 'string') {
      return content;
    } else if (Array.isArray(content)) {
      return content.map((nestedContent, index) => (
        <div key={index}>{renderContent((nestedContent as TextContent | CodeBlockContent | CalloutBoxContent).contents as string | Content[])}</div>
      ));
    } else {
      return null;
    }
  };

  const toggleNavigation = () => {
    appStore.setPageNavigationMinimized(!appStore.isPageNavigationMinimized);
  };

  if (appStore.isPageNavigationMinimized) {
    return (
      <MinimizedPageNavigationWrapper onClick={toggleNavigation}>
        <PageNavigationToggle>Navigation</PageNavigationToggle>
      </MinimizedPageNavigationWrapper>
    );
  }

  return (
    <PageNavigationWrapper>
      <PageNavigationHeader onClick={toggleNavigation}>Navigation</PageNavigationHeader>
      <div>
        {headers.map(header => (
          <NavigationItem
            key={header.id}
            depth={header.type === 'h1' ? 0 : 1}
            isActive={selectedId === header.id}
            onClick={() => scrollToSection(header.id!, setSelectedId)}
          >
            {renderContent(header.contents as string | Content[])}
          </NavigationItem>
        ))}
      </div>
    </PageNavigationWrapper>
  );
});

export default PageNavigation;
