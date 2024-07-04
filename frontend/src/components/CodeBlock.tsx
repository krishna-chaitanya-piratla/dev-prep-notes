import React, { useEffect, useRef, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, highlightSpecialChars, drawSelection, highlightActiveLine, dropCursor, rectangularSelection, crosshairCursor, lineNumbers, highlightActiveLineGutter } from '@codemirror/view';
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching, foldGutter, foldKeymap } from '@codemirror/language';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { CodeBlockContent } from '../types/Page';
import { CodeBlockWrapper } from '../styles/CodeBlock';

interface CodeBlockProps {
  content: CodeBlockContent;
  onContentChange: (newContent: CodeBlockContent) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, onContentChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorView, setEditorView] = useState<EditorView | null>(null);

  useEffect(() => {
    if (editorRef.current && !editorView) {
      const state = EditorState.create({
        doc: content.contents.map(item => item.contents).join('\n'),
        extensions: [
          lineNumbers(),
          highlightActiveLineGutter(),
          highlightSpecialChars(),
          drawSelection(),
          dropCursor(),
          EditorState.allowMultipleSelections.of(true),
          indentOnInput(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          bracketMatching(),
          foldGutter(),
          oneDark,
          getLanguageExtension(content.contents[0].type),
          keymap.of([...foldKeymap]),
          EditorView.updateListener.of(update => {
            if (update.docChanged) {
              const newContent = update.state.doc.toString();
              onContentChange({
                ...content,
                contents: [{ type: content.contents[0].type, contents: newContent }],
              });
            }
          }),
        ],
      });

      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      setEditorView(view);
    }

    return () => {
      if (editorView) {
        editorView.destroy();
      }
    };
  }, [editorRef, editorView, content, onContentChange]);

  return <CodeBlockWrapper ref={editorRef} />;
};

const getLanguageExtension = (language: string) => {
  switch (language) {
    case 'html':
      return html();
    case 'css':
      return css();
    case 'javascript':
      return javascript();
    case 'python':
      return python();
    default:
      return javascript();
  }
};

export default CodeBlock;
