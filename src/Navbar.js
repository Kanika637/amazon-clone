import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-black "
        style={{ backgroundColor: "#222f3e", color: "white" }}
      >
         <div className="navbar__complete">
         {/* <div className="nav__left"> */}
        <button
          class="navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span class="dark-blue-text">
            <i class="fas fa-bars fa-1x"></i>
          </span>
        </button>
       
     
       <a class="navbar-brand white-text " href="#" style={{fontSize:"15px", fontWeight:"bold", marginLeft:"-5px"}}>
       All
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
       Fresh
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
          Amazon Pay
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold" }}>
         Gift cards
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Today's Deals
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Sell
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Gift Ideas
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Buy Again
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Health, Household & Personal care
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Baby
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Toys& Games 
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Home Improvement
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        Browsing History
        <ArrowDropDownIcon/>
        
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"10px",  fontWeight:"bold"}}>
        coupons
        </a>
    
      
      
    

        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link white-text" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white-text" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white-text" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
