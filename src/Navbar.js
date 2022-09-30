import React from "react";
import "./Navbar.css";

function Navbar() {




  return (
    <div>
      <nav
        class="navbar navbar-black "
        style={{ backgroundColor: "#353232", color: "white" }}
      >
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
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px", fontWeight:"bold"}}>
          All
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px", marginLeft:"-740px"}}>
          Today's Deal
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  marginLeft:"-760px"}}>
          Buy Again
        </a>
       <a class="navbar-brand white-text mr-auto" href="/customer" style={{fontSize:"13px",  marginLeft:"-760px"}}>
          Customer services
        </a>
      
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  marginLeft:"-760px"}}>
          Gift Cards
        </a>
        <a class="navbar-brand white-text mr-auto" href="#" style={{fontSize:"13px",  marginLeft:"-750px"}}>
          Sell
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
