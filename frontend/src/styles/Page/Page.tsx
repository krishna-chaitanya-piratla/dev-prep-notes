import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: var(--page-background-color);
  color: black;
  width: auto;
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

export const ContentWrapper = styled.div `
  padding: 3.75rem;
  font-size: calc(1.125*var(--base-text-size));
  line-height: calc(1.125*var(--base-line-height));


`;