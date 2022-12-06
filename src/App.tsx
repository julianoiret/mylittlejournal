import React from 'react';
import GlobalStyle from './globalStyles';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import { data } from './data';

// const options = [
//   {
//       id: 1,
//       link: 'https://i.postimg.cc/ydN7vdg2/1.jpg',
//   },
//   {
//       id: 2,
//       link: 'https://i.postimg.cc/63KMX2L1/2.jpg',
//   },
//   {
//       id: 3,
//       link: 'https://i.postimg.cc/Ssmf50kB/5.jpg',
//   },
//   {
//       id: 4,
//       link: 'https://i.postimg.cc/hjM1RCGf/6.jpg',
//   },
// ]

const options = data;

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main carotte={options} />
    <Footer />
    </>
  );
}

export default App;
