import { useState } from 'react';

import '../header/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const categories = [
  'All Departments',
  'Audible Audiobooks',
  'Amazon Devices',
  'Kindle Store',
  'Prime Video',
  'Alexa Skills',
  'Subscribe & Save',
  'Digital Music',
  'Apps & Games',
  'Japanese Books',
  'English Books',
  'Music',
  'Classical',
  'Movies & TV',
  'Computer & Video Games',
  'Software',
  'Computers & Accessories',
  'Electronics & Cameras',
  'Stationery and Office Products',
  'Kitchen & Housewares',
  'Pet Supplies',
  'Health & Personal Care',
  'Beauty',
  'Food & Beverage',
  'Baby & Maternity',
  'Fashion',
  'Women',
  'Men',
  'Kids & Baby',
  'Clothing & Accessories',
  'Shoes & Bags',
  'Wrist Watches',
  'Jewelry',
  'Toys',
  'Hobby',
  'Musical Instruments',
  'Sports',
  'Car & Bike Products',
  'DIY, Tools & Garden',
  'Large Appliances',
  'Credit Cards',
  'Gift Cards',
  'Industrial & Scientific',
  'Warehouse Deals',
];

function HeaderSearchBar(props) {
  const [category, setCategory] = useState('All');

  function handleChange(event) {
    
    props.onSearch(event);
  }
  return (
    <form className="header__searchForm ">
      <div className="header__selectInput">
        <span className="header__selectInputText">{category}</span>
        <ArrowDropDownIcon className="header__selectInputIcon" />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <input
        className="header__searchInput"
        type="search"
        onChange={handleChange}
      />

      <SearchIcon className="header__searchIcon" />
    </form>
  );
}
export default HeaderSearchBar;
