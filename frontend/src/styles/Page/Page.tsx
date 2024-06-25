import styled, { css } from 'styled-components';

interface PageWrapperProps {
  depthNumbering: boolean;
}

export const PageWrapper = styled.div<PageWrapperProps>`
  background-color: var(--page-background-color);
  color: black;
  width: var(--page-width);
  min-height: 100vh;
  padding: 0;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1240px) {
    width: auto;
  }

  ${(props) =>
    props.depthNumbering &&
    css`
      ol {
        list-style-type: none;
        counter-reset: item;
        margin: 0;
        padding: 0;
        padding-left: 1rem;
      }

      ol > li {
        display: table;
        counter-increment: item;
        margin-bottom: 0.6em;
      }

      ol > li:before {
        content: counters(item, ".") ". ";
        display: table-cell;
        padding-right: 0.6em;    
      }

      li ol > li {
        margin: 0;
      }

      li ol > li:before {
        content: counters(item, ".") " ";
      }
    `}
`;

export const BannerWrapper = styled.div`
  color: black;
  display: flex;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  padding: 3.75rem;
  font-size: calc(1.125*var(--base-text-size));
  line-height: calc(1.125*var(--base-line-height));
  letter-spacing: 0.9px;

  h1, h2, h3, h4, h5, h6, p {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  em {
    font-family: "Sriracha", cursive;
    color: #e60067;
    font-style: normal;
    letter-spacing: 0.9px;
  }
`;
