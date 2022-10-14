import React, { useState } from "react";
import "./Header.css";
import logo from "./assets/amazon-logo.png";
import { ReactComponent as LocationSvg } from "./assets/Location.svg";
import { ReactComponent as CartSvg } from "./assets/Cart.svg";
import { ReactComponent as UserSvg } from "./assets/User.svg";


import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import HeaderSearchBar from "./HeaderSearchBar";

function Header({country='.in'}) {
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
          <span className="header__optionLineOne">Hello, Sign in {user?.name}</span>
          {/*this will handle the authentication
    if user is already signed in it will show 
    signout*/}
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Account & Lists"}
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
          <UserSvg />
          <span>{user ? user.name : "Accounts&Lists"}</span>
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
        <img className="header__logo" src={logo} alt="Amazon logo" /><span className="country">{country}</span>
      </Link>
      {screenWidth > 790 ? (
        <div className="header__locationOption">
          {/* <span className="header__optionLineOne">Hello</span> */}
          <span className="header__locationOptionLineTwo">
            <LocationSvg /> Select your location
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="header__search">
        <HeaderSearchBar />
      </div>
      
      <div className="header__nav">
    
        {/*if there is no user then only go to login pg*/}
        <Link to={!user && "/login"} className="header__right">
          {screenWidth >= 650
            ? renderNonMobileElements()
            : renderMobileElements()}
        </Link>
        <Link to="/checkout" className="header__checkout">
          <div className="header__optionBasket">
            <CartSvg />
            <div className="header__basketCount">{basket.length}</div>
          </div>
          {screenWidth > 860 ? (
            <div className="header__basketText">Cart</div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
