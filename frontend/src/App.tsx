import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import MainNavigation from './components/MainNavigation';
import PageNavigation from './components/PageNavigation';
import Page from './components/Page';
import Header from './components/Header';
import StyleHelmet from './components/StyleHelmet';

const App: React.FC = () => {
  return (
    <>
      <StyleHelmet />
      <GlobalStyle />
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <MainNavigation />
        <Page />
        <PageNavigation />
      </div>
    </>
  );
};

export default App;
