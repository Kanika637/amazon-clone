import React from "react";
import "./Header.css";
import logo from "./assets/amazon-logo.png";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  {
    /*this will help you 
    signout*/
  }
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
        </Link>
        {/* <div className="header__option">
          <p className="header__optionLineOne">Your</p>
          <p className="header__optionLineTwo">Orders</p>
        </div> */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon fontSize="large" />
            {/* <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
