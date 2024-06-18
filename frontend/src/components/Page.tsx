import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { PageWrapper } from '../styles/Page';

const renderContent = (content: any) => {
  switch (content.type) {
    case 'h1':
      return <h1>{content.contents}</h1>;
    case 'h2':
      return <h2>{content.contents}</h2>;
    case 'h3':
      return <h3>{content.contents}</h3>;
    case 'h4':
      return <h4>{content.contents}</h4>;
    case 'h5':
      return <h5>{content.contents}</h5>;
    case 'h6':
      return <h6>{content.contents}</h6>;
    case 'p':
      return <p dangerouslySetInnerHTML={{ __html: content.contents }}></p>;
    default:
      return null;
  }
};

const Page: React.FC = observer(() => {
  const { currentPage } = dataStore;

  return (
    <PageWrapper>
      <h2>{currentPage.title.h2Text}</h2>
      <h4>{currentPage.title.h4Text}</h4>
      {currentPage.contents.map((block, index) => (
        <div key={index}>
          {block.contents.map((content: any, subIndex: number) => (
            <div key={subIndex}>{renderContent(content)}</div>
          ))}
        </div>
      ))}
    </PageWrapper>
  );
});

export default Page;
