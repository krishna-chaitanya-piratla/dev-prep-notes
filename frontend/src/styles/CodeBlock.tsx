import styled from 'styled-components';

export const CodeBlockWrapper = styled.div`
  font-size: calc(0.95 * var(--base-text-size));
  letter-spacing: -0.25px;
  max-width: 95%;
  margin: 2rem 0;

  .cm-editor {
    background: #f5f6f9;
    color: var(--page-text-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
    outline: none;
  }

  .cm-scroller {
    font-family: "Source Code Pro", "Fira Mono", monospace;
  }

  .cm-content {
    caret-color: var(--page-text-color);
  }
`;
