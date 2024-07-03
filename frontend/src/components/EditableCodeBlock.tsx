import React, { useState, useEffect, useRef } from 'react';
import { Content, CodeBlockContent } from '../types/Page';
import CodeBlock from './CodeBlock';
import styled from 'styled-components';

interface EditableCodeBlockProps {
  content: CodeBlockContent;
  onContentChange: (newContent: CodeBlockContent) => void;
}

const EditableTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: monospace;
  font-size: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const EditableCodeBlock: React.FC<EditableCodeBlockProps> = ({ content, onContentChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(content.contents.map(item => item.contents).join('\n'));
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    const updatedContent: CodeBlockContent = {
      ...content,
      contents: code.split('\n').map(line => ({ type: content.contents[0].type, contents: line })),
    };
    onContentChange(updatedContent);
    setIsEditing(false);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <EditableTextArea
          ref={textAreaRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <div onClick={handleClick}>
          <CodeBlock language={content.contents[0].type} contents={code} />
        </div>
      )}
    </>
  );
};

export default EditableCodeBlock;
