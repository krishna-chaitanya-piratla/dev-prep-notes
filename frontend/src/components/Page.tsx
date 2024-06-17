import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: var(--page-background-color);
  color: var(--text-color);
  width: 80%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Page: React.FC = () => {
  return (
    <PageWrapper>
      <h1>Page Content</h1>
      <p>This is the page content.</p>
    </PageWrapper>
  );
};

export default Page;
