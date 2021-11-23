import React from 'react'
import './Header.css' 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
function Header() {
    const[{basket,user},dispatch]=useStateValue();  

    {/*this will help you 
    signout*/}
    const handleAuthentication=()=>
    

    {if(user)
        {auth.signOut();}

    }
    return (
        <div className="header">
            <Link to="/">
          <img className="header__logo"
          src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"/>  
          </Link>
        <div
        className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
            <div className="header__nav">
                {/*if there is no user then only go to login pg*/}
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} 
                className="header__option">
                    <span className="header__optionLineOne">
                        Hello, {user?.email}
                    </span>
                    {/*this will handle tyhe authentication
                    if user is already signed in it will show 
                    signout*/}
                    <span className="header__optionLineTwo">{user?'Sign Out'
                    :'Sign In'}
                        
                    </span>

                </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                    
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                    
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span classNAme="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>

        </div>
        
        </div>
    )
}

export default Header
