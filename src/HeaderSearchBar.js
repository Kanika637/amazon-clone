import { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function HeaderSearchBar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <form className={`header__searchForm ${clicked ? "add__border" : ""}`}>
      <div className="header__selectInput">
        <span className='header__selectInputText'>All</span>
       <ArrowDropDownIcon className='header__selectInputIcon'/> 
      </div>
      <input
        className="header__searchInput"
        type="text"
        onClick={clickHandler}
      />

      <SearchIcon className="header__searchIcon" />
    </form>
  );
}
export default HeaderSearchBar;
