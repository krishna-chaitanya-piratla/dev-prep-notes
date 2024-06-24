import styled, { css } from 'styled-components';

export const CalloutBox = styled.aside`
  position: relative;
  margin: 10px 0;
`;

const infoStyles = css`
  background-color: #dfebf6;

  .callout-icon {
    color: #4433ff;
  }

  .callout-content {
    border-left: 4px solid #4433ff;
  }
`;

const warningStyles = css`
  background-color: #ffdd0040;

  .callout-icon {
    color: #ff9d00;
  }

  .callout-content {
    border-left: 4px solid #ff9d00;
  }
`;

export const CalloutContent = styled.div<{ type: 'info' | 'warning' }>`
  padding: 10px;

  h4 {
    margin: 10px 0;
  }

  p {
    margin: 10px 0;
  }

  ${(props) => (props.type === 'warning' ? warningStyles : infoStyles)}
`;

export const CalloutIcon = styled.span<{ type: 'info' | 'warning' }>`
  font-size: 24px;
  margin-right: 10px;

  ${(props) =>
    props.type === 'warning' &&
    css`
      color: #ff9d00;
    `}
`;
