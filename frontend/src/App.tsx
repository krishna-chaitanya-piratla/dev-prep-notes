import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import MainNavigation from './components/MainNavigation/MainNavigation';
import PageNavigation from './components/PageNavigation/PageNavigation';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import StyleHelmet from './components/StyleHelmet';
import { AppWrapper, StyledLayout, AppContainer, PageContainer } from './styles/AppStyles';

const App: React.FC = () => {
  return (
    <>
      <StyleHelmet />
      <GlobalStyle />
      <AppWrapper>
        <AppContainer>
          <StyledLayout>
            <MainNavigation />
            <PageContainer>
              <Header />
              <Page />
            </PageContainer>
            <PageNavigation />
          </StyledLayout>
        </AppContainer>
      </AppWrapper>
    </>
  );
};

export default App;
