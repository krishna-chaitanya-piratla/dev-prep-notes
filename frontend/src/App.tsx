import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from './styles/GlobalStyle';
import Navigation from './components/Navigation';
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
        <Navigation />
        <Page />
      </div>
    </>
  );
};

export default App;
