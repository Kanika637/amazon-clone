import React, { useState } from "react";
import "./Header.css";
import logo from "./assets/amazon-logo.png";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  {
    /*this will help you 
    signout*/
  }

  // Add renderOnResize function
  const updateWidth = () => {
    let width = window.innerWidth;
    setScreenWidth(width);
  };

  const debounce = (func, time) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, time);
    };
  };

  const optimizedWidthSetter = debounce(updateWidth, 100);
  window.addEventListener("resize", optimizedWidthSetter);

  const renderNonMobileElements = () => {
    return (
      <>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello, {user?.email}</span>
          {/*this will handle the authentication
    if user is already signed in it will show 
    signout*/}
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </>
    );
  };

  const renderMobileElements = () => {
    return (
      <>
        <div onClick={handleAuthentication} className="header__option">
          <svg
            viewBox="0 0 68 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header__optionUser"
          >
            <path
              d="M66 78V65.6667C66 59.1247 64.3143 52.8506 61.3137 48.2247C58.3131 43.5988 54.2435 41 50 41H18C13.7565 41 9.68687 43.5988 6.68629 48.2247C3.68571 52.8506 2 59.1247 2 65.6667V78"
              stroke="white"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34 35.8333C42.8366 35.8333 50 28.3714 50 19.1667C50 9.96192 42.8366 2.5 34 2.5C25.1634 2.5 18 9.96192 18 19.1667C18 28.3714 25.1634 35.8333 34 35.8333Z"
              stroke="white"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{user ? user.email : "Sign In"}</span>
        </div>
      </>
    );
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon logo" />
      </Link>
      <div className="header__search">
        <HeaderSearchBar />
      </div>
      <div className="header__nav">
        {/*if there is no user then only go to login pg*/}
        <Link to={!user && "/login"} className="header__right">
          {/* {renderNonMobileElements()} */}
          {screenWidth > 500
            ? renderNonMobileElements()
            : renderMobileElements()}
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <svg
              width="131"
              height="74"
              viewBox="0 0 131 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cart">
                <path
                  id="Vector 1"
                  d="M27.7918 8H3.75C1.67893 8 0 6.32107 0 4.25C0 2.17893 1.67893 0.5 3.75 0.5H32.241C34.5401 0.5 36.6369 1.81368 37.6399 3.88236L58.3601 46.6176C59.3631 48.6863 61.4599 50 63.759 50H103.049C105.692 50 108.024 48.2699 108.791 45.74L121.693 3.16265C122.172 1.58137 123.63 0.5 125.282 0.5C127.846 0.5 129.654 3.0154 128.837 5.44562L112.875 52.9125C112.053 55.3548 109.764 57 107.188 57H59.7082C57.4356 57 55.358 55.716 54.3416 53.6833L33.1584 11.3167C32.142 9.28401 30.0644 8 27.7918 8Z"
                  fill="white"
                />
                <ellipse
                  id="Ellipse 1"
                  cx="65"
                  cy="65.5"
                  rx="9"
                  ry="8.5"
                  fill="white"
                />
                <ellipse
                  id="Ellipse 2"
                  cx="104"
                  cy="65.5"
                  rx="9"
                  ry="8.5"
                  fill="white"
                />
              </g>
            </svg>
            <div className="header__basketCount">{basket.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
