import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Home from '../../pages/home/Home';
import Header from '../../components/header/Header';

function HeaderHomeLayout ({ children }) {
  //This State will keep Track of what is entered in the searchField
  const [searchField, setSearchField] = useState('');

  //updating the State from Header Component which further updating itself from HeaderSearchBar.js
  let inputHandler = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <Header inputHandler={inputHandler} />
      <Navbar />
      <Home text={searchField} />
      <main>{children}</main>
    </div>
  );
};

export default HeaderHomeLayout;
