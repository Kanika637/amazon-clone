import React, { useState } from 'react';
import './Navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SideNav from '../../SideNav';

// All nav items list array
const navItemList = [
  { id: 0, title: 'Fresh', hrefLink: '#' },
  { id: 1, title: 'Amazon Pay', hrefLink: '#' },
  { id: 2, title: 'Gift Cards', hrefLink: '#' },
  { id: 3, title: "Today's Deals", hrefLink: '#' },
  { id: 4, title: 'Sell', hrefLink: '#' },
  { id: 5, title: 'Gift Ideas', hrefLink: '#' },
  { id: 6, title: 'Buy Again', hrefLink: '#' },
  { id: 7, title: 'Health, Household & Personal Care', hrefLink: '#' },
  { id: 8, title: 'Baby', hrefLink: '#' },
  { id: 9, title: 'Toys & Games', hrefLink: '#' },
  { id: 10, title: 'Home Improvement', hrefLink: '#' },
  { id: 11, title: 'Browsing History', hrefLink: '#' },
  { id: 12, title: 'Coupons', hrefLink: '#' },
];

function Navbar() {
  const [sideNavVisibility, toggleSideNavVisibility] = useState(false);
  return (
    <div>
      <nav
        className="navbar navbar-black "
        style={{ backgroundColor: '#222f3e', color: 'white' }}
      >
        <div className="navbar__complete">
          <button
            className="navbar-toggler toggler-example hamburger__menu"
            type="button"
            onClick={(_) => {
              toggleSideNavVisibility(true);
            }}
            style={{ color: 'white' }}
          >
            <span className="dark-blue-text hamburger__menu__icon">
              <i className="fas fa-bars fa-1x"></i>
              <span>All</span>
            </span>
          </button>

          {navItemList?.map((navItem) => (
            <a
              className="navbar-brand white-text nav__item"
              key={navItem.id}
              href={navItem.hrefLink}
            >
              {navItem.title}
              {navItem.title === 'Browsing History' && <ArrowDropDownIcon />}
            </a>
          ))}
        </div>
      </nav>
      {sideNavVisibility && (
        <SideNav toggleVisibility={toggleSideNavVisibility} />
      )}
    </div>
  );
}

export default Navbar;
