import React from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import { BannerWrapper, ContentWrapper, PageWrapper } from '../../styles/Page/Page';
import Banner from './Banner';
import Editable from '../Editable';
import { Content, OrderedListContent } from '../../types/Page';

const Page: React.FC = observer(() => {
  const { currentPage } = dataStore;
  const depthNumbering = currentPage.contents.some(
    (block) =>
      block.contents.some(
        (content) =>
          content.type === 'ordered-list' &&
          (content as OrderedListContent).depthNumbering !== false
      )
  );

  const handleContentChange = (contentId: string, newContent: Content) => {
    const updatedPage = { ...currentPage };
    updatedPage.contents = updatedPage.contents.map(block => ({
      ...block,
      contents: block.contents.map(content => 
        content.id === contentId ? newContent : content
      )
    }));
    dataStore.setPage(updatedPage); // Assuming you have a method to update the page in the store
  };

  return (
    <PageWrapper depthNumbering={depthNumbering}>
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
              <Editable
                key={content.id}
                content={content}
                onContentChange={(newContent) => handleContentChange(content.id || '', newContent)}
              />
            ))}
          </div>
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
});

export default Page;
