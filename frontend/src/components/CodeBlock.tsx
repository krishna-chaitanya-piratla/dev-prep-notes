import React, { useEffect, useRef } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { CodeBlockWrapper } from '../styles/CodeBlock';
import { CodeBlockContent } from '../types/Page';

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

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
  }, []);

  const getExtensions = (lang: string): Extension[] => {
    const extensions = [
      keymap.of(defaultKeymap),
      oneDark,
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

  return <CodeBlockWrapper ref={editorRef} />;
};

export default CodeBlock;
