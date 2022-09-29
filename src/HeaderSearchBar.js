 
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function HeaderSearchBar() {
  

  return (
    <form className="header__searchForm ">
      <div className="header__selectInput">
        <span className='header__selectInputText'>All</span>
       <ArrowDropDownIcon className='header__selectInputIcon'/> 
      </div>
      <input
        className="header__searchInput"
        type="text"
         
      />

      <SearchIcon className="header__searchIcon" />
    </form>
  );
}
export default HeaderSearchBar;