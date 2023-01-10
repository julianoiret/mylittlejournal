import React from 'react';
import GlobalStyle from './globalStyles';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import { data } from './data';


function App() {

  const photoGallery = data;

  return (
    <>
    <GlobalStyle />
    <Header />
    <Main photoGallery={photoGallery} />
    <Footer />
    </>
  );
}

export default App;
