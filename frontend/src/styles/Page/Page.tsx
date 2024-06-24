import styled from 'styled-components';

export const PageWrapper = styled.div`
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
