import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from './styles/GlobalStyle';
import Navigation from './components/Navigation';
import Page from './components/Page';

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
      <Navigation />
      <Page />
    </>
  );
};

export default App;
