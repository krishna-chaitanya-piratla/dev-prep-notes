import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from './styles/GlobalStyle';
import MainNavigation from './components/MainNavigation';
import PageNavigation from './components/PageNavigation';
import Page from './components/Page';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
