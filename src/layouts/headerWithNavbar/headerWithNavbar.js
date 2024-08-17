import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Header from '../../components/header/Header';

function HeaderWithNavbar ({ children }) {

  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HeaderWithNavbar;
