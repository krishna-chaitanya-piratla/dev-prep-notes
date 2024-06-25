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

export const CalloutContent = styled.div<{ type: 'info' | 'warning'; maxHeight: string }>`
  padding: 10px;
  border-radius: 6px 6px 6px 3px;
  position: relative;
  transition: max-height 0.5s ease;

  .callout-body {
    max-height: ${({ maxHeight }) => maxHeight};
    overflow: hidden;
    transition: max-height 0.5s ease;
  }

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
  flex-direction: row; /* Align items horizontally */
  align-items: center; /* Align items to the center vertically */
  justify-content: space-between; /* Add space between title and icon */
  cursor: pointer;
`;

export const CalloutTitle = styled.h4`
  margin: 0; /* Remove margin for tighter alignment */
  text-align: left; /* Align the title to the left */
`;

export const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
