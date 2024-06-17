import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import MainNavigation from './components/MainNavigation';
import PageNavigation from './components/PageNavigation';
import Page from './components/Page';
import Header from './components/Header';
import StyleHelmet from './components/StyleHelmet';
import { StyledLayout, AppContainer } from './styles/AppStyles';

const App: React.FC = () => {
  return (
    <>
      <StyleHelmet />
      <GlobalStyle />
      <AppContainer>
        <StyledLayout>
          <MainNavigation />
          <div style={{ flexGrow: 1 }}>
            <Header />
            <Page />
          </div>
          <PageNavigation />
        </StyledLayout>
      </AppContainer>
    </>
  );
};

export default App;
