import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-black "
        style={{ backgroundColor: "#222f3e", color: "white" }}
      >
         <div className="navbar__complete">
         <div className="nav__left">
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
       
     
       <a class="navbar-brand white-text mr-auto " href="#" style={{fontSize:"13px", fontWeight:"bold"}}>
       All
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  fontWeight:"bold"}}>
       Fresh
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  fontWeight:"bold"}}>
        Buy Again

        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  fontWeight:"bold"}}>
          Amazon Pay
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  fontWeight:"bold" }}>
         Gift cards
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  fontWeight:"bold"}}>
        Gift Ideas
        </a>
       </div>
       <div className="navbar__right">
       <img className="navbar__img" src="https://play-lh.googleusercontent.com/Av2HpYJCl4SLe3oYmEZJcnFZYwjDcDpbdtqp0pu8lad1JI_sgMIIIQHyM-HodjZQi4Qx" alt="" />
          <span style={{fontSize:"18px"}}>Shopping made easy | Download the app</span>
       </div>
        </div>
      
      
    

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
