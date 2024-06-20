import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../stores/DataStore';
import { BannerWrapper, ContentWrapper, PageWrapper } from '../styles/Page';
import Banner from './Banner';

const renderContent = (content: any) => {
  switch (content.type) {
    case 'h1':
      return <h1 id={content.id}>{content.contents}</h1>;
    case 'h2':
      return <h2 id={content.id}>{content.contents}</h2>;
    case 'h3':
      return <h3 id={content.id}>{content.contents}</h3>;
    case 'h4':
      return <h4 id={content.id}>{content.contents}</h4>;
    case 'h5':
      return <h5 id={content.id}>{content.contents}</h5>;
    case 'h6':
      return <h6 id={content.id}>{content.contents}</h6>;
    case 'p':
      return <p id={content.id} dangerouslySetInnerHTML={{ __html: content.contents }}></p>;
    default:
      return null;
  }
};

const Page: React.FC = observer(() => {
  const { currentPage } = dataStore;

  return (
    <PageWrapper>
      <BannerWrapper>
        <Banner
          imageUrl={currentPage.title.bannerUrl}
          h4Text={currentPage.title.h4Text}
          h2Text={currentPage.title.h2Text}
        />
      </BannerWrapper>
      <ContentWrapper>
        {currentPage.contents.map((block, index) => (
          <div key={index}>
            {block.contents.map((content: any) => (
              <div key={content.id}>{renderContent(content)}</div>
            ))}
          </div>
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
});

export default Page;
