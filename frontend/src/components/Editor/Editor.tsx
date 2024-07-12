import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import Toolbar from './Toolbar';
import PlaygroundEditorTheme from './Theme';
import Nodes from './Nodes';
import './Editor.css';

const editorConfig = {
  namespace: 'Playground',
  theme: PlaygroundEditorTheme,
  nodes: [...Nodes],
  onError: (error: Error) => {
    console.error(error);
  },
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Toolbar />
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="editor-placeholder"></div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}
