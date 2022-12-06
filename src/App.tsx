import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';



function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
