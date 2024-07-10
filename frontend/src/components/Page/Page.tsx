import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import dataStore from '../../stores/DataStore';
import { BannerWrapper, ContentWrapper, PageWrapper } from '../../styles/Page/Page';
import Banner from './Banner';
import Editable from '../Editable';
import DraggableBlock from '../DraggableBlock';
import { Content, OrderedListContent, ImageContent } from '../../types/Page';

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
    dataStore.setPage(updatedPage);
  };

  const moveBlock = (dragIndex: number, hoverIndex: number) => {
    const updatedPage = { ...currentPage };
    const [removed] = updatedPage.contents[0].contents.splice(dragIndex, 1);
    updatedPage.contents[0].contents.splice(hoverIndex, 0, removed);
    dataStore.setPage(updatedPage);
  };

  const handleImageDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        const newImageContent: ImageContent = {
          type: 'image',
          src,
          alt: file.name,
          id: `image_${Date.now()}`
        };
        const updatedPage = { ...currentPage };
        updatedPage.contents[0].contents.push(newImageContent);
        dataStore.setPage(updatedPage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (newImage: File | null) => {
    if (newImage) {
      const fileURL = URL.createObjectURL(newImage);
      const updatedPage = {
        ...currentPage,
        title: {
          ...currentPage.title,
          bannerUrl: fileURL,
        },
      };
      dataStore.setPage(updatedPage);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <PageWrapper
        depthNumbering={depthNumbering}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleImageDrop}
      >
        <BannerWrapper>
          <Banner
            imageUrl={currentPage.title.bannerUrl}
            h2Text={currentPage.title.h2Text}
            onImageChange={handleImageChange}
          />
        </BannerWrapper>
        <ContentWrapper>
          {currentPage.contents[0].contents.map((content, index) => (
            <DraggableBlock key={content.id} index={index} moveBlock={moveBlock} content={content}>
              <Editable
                content={content}
                onContentChange={(newContent) => handleContentChange(content.id || '', newContent)}
              />
            </DraggableBlock>
          ))}
        </ContentWrapper>
      </PageWrapper>
    </DndProvider>
  );
});

export default Page;
