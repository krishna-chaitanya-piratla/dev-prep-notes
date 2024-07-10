import React from 'react';
import { Content, TextContent, CodeBlockContent, CalloutBoxContent, ImageContent } from '../types/Page';
import { renderPageContent } from '../utils/helpers';
import { EditableDiv } from '../styles/EditableDiv';
import CodeBlock from './CodeBlock';
import CalloutBoxComponent from './CalloutBox';
import Image from './Image';

interface EditableProps {
  content: Content;
  onContentChange: (newContent: Content) => void;
}

const Editable: React.FC<EditableProps> = ({ content, onContentChange }) => {
  const isTextContent = (content: Content): content is TextContent => {
    return (
      content.type === 'p' ||
      content.type === 'h1' ||
      content.type === 'h2' ||
      content.type === 'h3' ||
      content.type === 'h4' ||
      content.type === 'h5' ||
      content.type === 'h6'
    );
  };

  const isCodeBlockContent = (content: Content): content is CodeBlockContent => {
    return content.type === 'code-block';
  };

  const isCalloutBoxContent = (content: Content): content is CalloutBoxContent => {
    return content.type === 'callout-box';
  };

  const isImageContent = (content: Content): content is ImageContent => {
    return content.type === 'image';
  };

  if (isCodeBlockContent(content)) {
    return <CodeBlock content={content} onContentChange={onContentChange} />;
  }

  if (isCalloutBoxContent(content)) {
    return <CalloutBoxComponent content={content} onContentChange={onContentChange} />;
  }

  if (isImageContent(content)) {
    return <Image src={content.src} alt={content.alt} />;
  }

  if (!isTextContent(content)) {
    return <>{renderPageContent(content, onContentChange)}</>;
  }

  return (
    <EditableDiv
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={(e) => onContentChange({ ...content, contents: e.currentTarget.innerHTML })}
      dangerouslySetInnerHTML={{ __html: content.contents }}
    />
  );
};

export default Editable;
