import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Header.css';
import logo from '../../assets/amazon-logo.png';
import { ReactComponent as LocationSvg } from '../../assets/Location.svg';
import { ReactComponent as CartSvg } from '../../assets/Cart.svg';
import { ReactComponent as UserSvg } from '../../assets/User.svg';

import { Link } from 'react-router-dom';
import { useStateValue } from "../../context/StateProvider";
import { auth } from '../../firebase';
import HeaderSearchBar from '../searchBar/HeaderSearchBar';
import { useEffect } from 'react';

function Header(props) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(false);

  {
    /*this will help you 
    signout*/
  }
  let history=useHistory();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      setValue(true)
    }
  };
  useEffect(()=>{
    if(user){
      setValue(false)
    }
    else setValue(true)
   let timer=setTimeout(()=>{
    setValue(false)
    if(user===undefined){
      setValue(true)
    }
    setValue(false)
   },7000)

   return ()=> clearTimeout(timer)
  },[user])

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
  window.addEventListener('resize', optimizedWidthSetter);

  const renderNonMobileElements = () => {
    return (
      <>
        <div className="header__option relative">
          <span className="header__optionLineOne">Hello, {user ? user?.email.slice(0,7):'user'}</span>
          {/*this will handle the authentication
    if user is already signed in it will show 
    signout*/}
          <span className="header__optionLineTwo br-2"  onClick={user ?handleAuthentication:()=>history.push('/login')}>
            {user ? 'Sign Out' : 'Sign In'}
          </span>
          {(value) ? <>
              <div class="nav_arrow"></div>
            <div className="box">
              <div class="signupbtn" onClick={()=>history.push('/login')}>
                Sign In
              </div>
              <div class="text">
                New customer?<span class="link" onClick={()=>history.push('/login')}> Start here.</span>
              </div>
            </div>
            </>:null}
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
          <span>{user ? user?.email.slice(0,7) : 'Sign In'}</span>
        </div>
      </>
    );
  };

  return (
    <div className="header">

      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon logo" />
      </Link>

      {screenWidth > 790 ? (
        <div className="header__locationOption">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__locationOptionLineTwo">
            <LocationSvg /> Select your location
          </span>
        </div>
      ) : (
        ''
      )}
      <div className="header__search">
        <HeaderSearchBar onSearch={props.inputHandler} />
      </div>
      <div className="header__nav">
        {/*if there is no user then only go to login pg*/}
        <div className="header__right">
          {screenWidth >= 650
            ? renderNonMobileElements()
            : renderMobileElements()}
        </div>
        <Link to="/checkout" className="header__checkout">
          <div className="header__optionBasket">
            <CartSvg />
            <div className="header__basketCount">{basket.length}</div>
          </div>
          {screenWidth > 860 ? (
            <div className="header__basketText">Cart</div>
          ) : (
            ''
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
