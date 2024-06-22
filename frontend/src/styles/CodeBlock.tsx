import styled from 'styled-components';

// Base styles for the code block
export const StyledCodeBlock = styled.div`
  max-width: 95%;
  font-size: calc(0.85*var(--base-text-size));
  margin: 0;
  letter-spacing: 1px;

  pre {
    white-space: pre-wrap;  // Preserve whitespace and wrap content
    word-wrap: break-word;  // Ensure long words or content break onto the next line
    background: #f5f6f9 !important;
    color: #000000;
    padding: 1rem;  // Add padding for better readability
    border-radius: 0.5rem;  // Add border radius for better styling
    overflow-x: hidden;  // Prevent horizontal scrolling
  }

  code {
    white-space: pre-wrap;  // Preserve whitespace and wrap content
    word-wrap: break-word;  // Ensure long words or content break onto the next line
  }

  
  // Custom theme styles
  .hljs {
    background: #f5f6f9 !important;
    color: #000000;
    font-family: "Source Code Pro", "Fira Mono", monospace;
    font-size: calc(0.85*var(--base-text-size));
  }

  .hljs *::selection {
    background-color: #c5ccd3d9; /* Light gray background */
    color: inherit;  /* Inherits the text color from the element itself */
  }

  .hljs-keyword, .hljs-selector-tag, .hljs-literal, .hljs-section, .hljs-link {
    color: #aa00ff;
  }

  .hljs-function .hljs-keyword {
    color: #aa00ff;
  }

  .hljs-string {
    color: #CE9178;
  }

  .hljs-comment, .hljs-quote {
    color: #6272a4;
  }

  .hljs-doctag, .hljs-formula {
    color: #f8f8f2;
  }

  .hljs-meta .hljs-keyword {
    color: #ff79c6;
  }

  .hljs-meta {
    color: #f8f8f2;
  }

  .hljs-attr {
    color: #da0079;
  }

  .hljs-attribute {
    color: #da0079;
  }

  .hljs-builtin-name {
    color: #66d9ef;
  }

  .hljs-section {
    color: #ff79c6;
  }

  .hljs-tag {
    font-weight: 700;
    color: #da0079;
  }

  .hljs-type {
    color: #66d9ef;
  }

  .hljs-symbol {
    color: #66d9ef;
  }

  .hljs-bullet {
    color: #8be9fd;
  }

  .hljs-addition {
    color: #50fa7b;
  }

  .hljs-variable, .hljs-template-variable {
    color: #ff79c6;
  }

  .hljs-template-tag, .hljs-string {
    color: #CE9178;
  }

  .hljs-title {
    color: #da0079;
  }

  .hljs-name {
    color: #da0079;
  }

  .hljs-title.class_ {
    font-weight: 400;
  }

  .hljs-deletion {
    color: #ff5555;
  }

  .hljs-number, .hljs-selector-id {
    color: #bd93f9;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs::selection {
    background-color: #c5ccd3d9;
    color: #000000;
  }

  .hljs-name, .hljs-quote, .hljs-selector-pseudo {
    font-weight: 500;
    color: #da0079 !important;
  }

  .hljs-attr, .hljs-attribute, .hljs-literal, .hljs-meta, .hljs-number, .hljs-operator, .hljs-variable, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-id {
    color: #aa00ff !important;
    font-weight: normal;
  }

  .hljs-regexp, .hljs-string, .hljs-meta .hljs-string {
    color: #c86c48 !important;
    font-weight: normal;
  }

  .hljs-selector-tag {
    color: #aa00ff !important;
    font-weight: 500;
  }

  .hljs-attribute {
    color: #da0079 !important;
  }

  .hljs-keyword, .hljs-number {
    color: #3d5afe !important;
  }

  .editable-code-block {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }

  .code-preview {
    margin-top: 10px;
    background: #f5f6f9;
    padding: 10px;
    border: 1px solid #ddd;
  }
`;
