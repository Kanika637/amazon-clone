 import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children, inputHandler }) => {
  return (
    <>
      <Header inputHandler={inputHandler} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;