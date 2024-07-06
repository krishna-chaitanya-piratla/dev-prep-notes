import React, { useEffect, useRef } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { python } from '@codemirror/lang-python';
import { keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { CodeBlockWrapper, CodeBlockContainer, CodeBlockHeader } from '../styles/CodeBlock';
import { CodeBlockContent } from '../types/Page';
import customCodeBlockTheme from '../styles/codemirror/CustomTheme';

interface CodeBlockProps {
  content: CodeBlockContent;
  onContentChange: (newContent: CodeBlockContent) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, onContentChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const handleUpdate = (update: ViewUpdate) => {
      if (update.docChanged) {
        const newDoc = update.state.doc.toString();
        const updatedContent = {
          ...content,
          contents: [{ ...content.contents[0], contents: newDoc }],
        };
        onContentChange(updatedContent);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && viewRef.current) {
        viewRef.current.contentDOM.blur();
      }
    };

    if (!viewRef.current) {
      // Initialize the editor view only once
      const startState = EditorState.create({
        doc: content.contents[0].contents,
        extensions: getExtensions(content.contents[0].type).concat(EditorView.updateListener.of(handleUpdate)),
      });
      viewRef.current = new EditorView({
        state: startState,
        parent: editorRef.current,
      });
    } else {
      // Update the state without recreating the view
      const currentDoc = viewRef.current.state.doc.toString();
      if (currentDoc !== content.contents[0].contents) {
        viewRef.current.dispatch({
          changes: { from: 0, to: currentDoc.length, insert: content.contents[0].contents },
        });
      }
    }

    // Add the keydown event listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
      // Remove the keydown event listener
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this runs only once

  const getExtensions = (lang: string): Extension[] => {
    const extensions = [
      keymap.of(defaultKeymap),
      customCodeBlockTheme,
    ];

    switch (lang) {
      case 'javascript':
        extensions.push(javascript());
        break;
      case 'html':
        extensions.push(html());
        break;
      case 'css':
        extensions.push(css());
        break;
      case 'python':
        extensions.push(python());
        break;
      default:
        break;
    }

    return extensions;
  };

  return (
    <CodeBlockContainer>
      <CodeBlockHeader>
        <span>{content.contents[0].type.toUpperCase()}</span>
        <span>Theme</span>
      </CodeBlockHeader>
      <CodeBlockWrapper ref={editorRef} />
    </CodeBlockContainer>
  );
};

export default CodeBlock;
