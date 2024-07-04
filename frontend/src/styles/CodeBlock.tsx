import styled from 'styled-components';

export const CodeBlockWrapper = styled.div`
  font-size: calc(0.95 * var(--base-text-size));
  margin: 0;
  letter-spacing: -0.25px;

  .cm-editor {
    background: var(--page-background-color);
    color: var(--page-text-color);
    border-radius: 5px;
  }
`;
