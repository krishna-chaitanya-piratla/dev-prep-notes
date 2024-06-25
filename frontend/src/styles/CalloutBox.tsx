import styled, { css } from 'styled-components';

export const CalloutBox = styled.aside`
  position: relative;
  margin: 1rem 0;
`;

const infoStyles = css`
  background-color: #dfebf6;
  border-left: 3px solid #4433ff;

  .callout-icon-container {
    background-color: #ffffff; /* Assuming the page background color is white */
  }

  .callout-icon {
    color: #4433ff;
  }

  .callout-content {
    border-left: 4px solid #4433ff;
  }
`;

const warningStyles = css`
  background-color: #ffdd0040;
  border-left: 3px solid orange;

  .callout-icon-container {
    background-color: #ffffff; /* Assuming the page background color is white */
  }

  .callout-icon {
    color: #ff9d00;
  }

  .callout-content {
    border-left: 4px solid #ff9d00;
  }
`;

export const CalloutContent = styled.div<{ type: 'info' | 'warning' }>`
  padding: 10px;
  border-radius: 6px 6px 6px 3px;
  position: relative;

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 10px 0;
  }

  ${(props) => (props.type === 'warning' ? warningStyles : infoStyles)}

  pre, code {
    width: 95%;
    padding: 0;
    margin-left: 1.5rem;
  }

  .hljs {
    width: 100%;
    margin-left: 0;
    ${(props) =>
        props.type === 'warning' &&
        css`
          background-color: rgba(255, 221, 0, 0.25) !important;
        `}
    
      ${(props) =>
        props.type === 'info' &&
        css`
          background-color: rgba(223, 235, 246, 0.25) !important;
        `}
  }
`;

export const CalloutIconContainer = styled.div<{ type: 'info' | 'warning' }>`
  position: absolute;
  top: -20px;
  left: -22px;
  width: 40px;
  height: 40px;
  background-color: var(--page-background-color) !important; /* This should match the page background color */
  border-radius: 0 0 50% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: #ffdd0040;
    `}

  ${(props) =>
    props.type === 'info' &&
    css`
      background-color: #dfebf6;
    `}
`;

export const CalloutIcon = styled.span<{ type: 'info' | 'warning' }>`
  font-size: 2rem;

  ${(props) =>
    props.type === 'warning' &&
    css`
      color: #ff9d00;
    `}
  
  ${(props) =>
    props.type === 'info' &&
    css`
      color: #4433ff;
    `}
`;

export const CalloutHeader = styled.div`
  display: flex;
  flex-direction: column; /* Change direction to column to stack icon and title vertically */
  align-items: flex-start; /* Align items to the start (left) */
  margin-bottom: 10px;
  margin-top: 1rem;
`;

export const CalloutTitle = styled.h4`
  margin: 0; /* Remove margin for tighter alignment */
  text-align: left; /* Align the title to the left */
`;
