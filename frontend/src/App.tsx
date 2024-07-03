import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import MainNavigation from './components/MainNavigation/MainNavigation';
import PageNavigation from './components/PageNavigation/PageNavigation';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import StyleHelmet from './components/StyleHelmet';
import { AppWrapper, StyledLayout, AppContainer, PageContainer } from './styles/AppStyles';
import appStore from './stores/AppStore';

const App: React.FC = () => {
  return (
    <>
      <StyleHelmet />
      <GlobalStyle />
      <AppWrapper>
        <AppContainer>
          <StyledLayout>
            <MainNavigation />
            <PageContainer isMinimized={appStore.isPageNavigationMinimized}>
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
