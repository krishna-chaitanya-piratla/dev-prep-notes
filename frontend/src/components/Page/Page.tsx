import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { BannerWrapper, ContentWrapper, PageWrapper } from '../../styles/Page/Page';
import Banner from './Banner';
import { Content } from '../../types/Page';
import { renderPageContent } from '../../utils/helpers';

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
              <div key={content.id}>{renderPageContent(content)}</div>
            ))}
          </div>
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
});

export default Page;
