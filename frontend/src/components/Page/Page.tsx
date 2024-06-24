import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { BannerWrapper, ContentWrapper, PageWrapper } from '../../styles/Page/Page';
import Banner from './Banner';
import CodeBlock from '../CodeBlock';
import CalloutBox from '../CalloutBox';
import { Content, CalloutBoxContent } from '../../types/Page';

const renderContent = (content: Content) => {
  switch (content.type) {
    case 'h1':
      return <h1 id={content.id}>{content.contents as string}</h1>;
    case 'h2':
      return <h2 id={content.id}>{content.contents as string}</h2>;
    case 'h3':
      return <h3 id={content.id}>{content.contents as string}</h3>;
    case 'h4':
      return <h4 id={content.id}>{content.contents as string}</h4>;
    case 'h5':
      return <h5 id={content.id}>{content.contents as string}</h5>;
    case 'h6':
      return <h6 id={content.id}>{content.contents as string}</h6>;
    case 'p':
      return <p id={content.id} dangerouslySetInnerHTML={{ __html: content.contents as string }}></p>;
    case 'code-block':
      return (
        <div id={content.id}>
          {(content.contents as Content[]).map((item, index) => (
            <CodeBlock key={index} language={item.type} contents={item.contents as string} />
          ))}
        </div>
      );
    case 'callout-box':
      return <CalloutBox {...(content as CalloutBoxContent)} />;
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
            {block.contents.map((content: Content) => (
              <div key={content.id}>{renderContent(content)}</div>
            ))}
          </div>
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
});

export default Page;
