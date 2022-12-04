import React from "react";
import "./SideNav.css";

function SideNav({ toggleVisibility }) {
  return (
    <div className="sidenav">
      <div className="sidenav-head">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div>Hello User</div>
        <div onClick={(_) => toggleVisibility(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="sidenav-body">
        <h3>Trending</h3>
        <p>Best Sellers</p>
        <p>New releases</p>
        <p>Movers and Shakers</p>
        <hr />
        <h3>Digital content and devices</h3>
        <p>Echo & Alexa</p>
        <p>Fire TV</p>
        <p>Kindle</p>
        <hr />
        <h3>Shop by category</h3>
        <p>Mobiles, Computers</p>
        <p>Men's fashion</p>
        <hr />
        <h3>Programs & features</h3>
        <p>Mobiles, Computers</p>
        <p>Men's fashion</p>
        <hr />
        <h3>Help & settings</h3>
        <p>Your account</p>
        <p>Customer Service</p>
        <p>Sign Out</p>
      </div>
    </div>
  );
}

export default SideNav;
