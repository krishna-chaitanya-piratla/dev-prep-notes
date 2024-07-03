import React, { useState, useEffect, useRef } from 'react';
import { Content, TextContent } from '../types/Page';
import { renderPageContent } from '../utils/helpers';

import styled from 'styled-components';

const EditableDiv = styled.div`
  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
  }
`;

interface EditableProps {
  content: Content;
  onContentChange: (newContent: Content) => void;
}

const Editable: React.FC<EditableProps> = ({ content, onContentChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    if (contentRef.current && content.type !== 'code-block' && isTextContent(content)) {
      onContentChange({ ...content, contents: contentRef.current.innerHTML });
    }
    setIsEditing(false);
  };

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

  if (!isTextContent(content)) {
    return <>{renderPageContent(content)}</>;
  }

  return (
    <EditableDiv
      ref={contentRef}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      onClick={() => setIsEditing(true)}
      dangerouslySetInnerHTML={{ __html: content.contents }}
    />
  );
};

export default Editable;
