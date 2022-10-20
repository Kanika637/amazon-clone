import React from 'react'
import "./footer.css"
import { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import footLogo from './assets/amazon-logo.png'
function Footer() {


  //back to top-->
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <footer className="footer">
      <div className="top" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="rest-footer-1">
        <div className="sec">
          <h5 className="foot-head">Get to Know Us</h5>
          <ul className="foot-content">
            <li className="leading-5">
              <a href="#">About us</a>
            </li>
            <li className="leading-5">
              <a href="#">Careers</a>
            </li>
            <li className="leading-5">
              <a href="#">Press Releases</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Cares</a>
            </li>
            <li className="leading-5">
              <a href="#">Gift a Smile</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className="sec">
          <h5 className="foot-head">
            Contact Us
          </h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Facebook</a>
            </li>
            <li className="leading-5">
              <a href="#">Twitter</a>
            </li>
            <li className="leading-5">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="sec">
          <h5 className="foot-head">Make Money with Us</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Sell products on Amazon</a>
            </li>
            <li className="leading-5">
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li className="leading-5">
              <a href="#">Become an Affiliate</a>
            </li>
            <li className="leading-5">
              <a href="#">Advertise Your Products</a>
            </li>
            <li className="leading-5">
              <a href="#">Self-publish with Us</a>
            </li>
            <li className="leading-5">
              <a href="#">Host an Amazon Hub</a>
            </li>
          </ul>
        </div>
        <div className="sec">
          <h5 className="foot-head">Let Us Help You</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li className="leading-5">
              <a href="#">Your Account</a>
            </li>
            <li className="leading-5">
              <a href="#">Your Orders</a>
            </li>
            <li className="leading-5">
              <a href="#">Shipping Rates and Policies</a>
            </li>
            <li className="leading-5">
              <a href="#">Returns and Replacements</a>
            </li>
            <li className="leading-5">
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Assistant</a>
            </li>
            <li className="leading-5">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div class='footer-line'>
        </div>
        <div class="logoLangContainer">
            <ul>
                <li class="footLogo" ><img src={footLogo} alt=""/></li>
                <li> <span>English</span> </li>
            </ul>
        </div>
        <div class="NationsContainer">
            <ul>
                <li>Australia</li>
                <li>Brazil</li>
                <li>Canada</li>
                <li>China</li>
                <li>France</li>
                <li>Germany</li>
                <li>Italy</li>
                <li>Japan</li>
                <li>Mexico</li>
                <li>Netherlands</li>
                <li>Poland</li>
                <li>Singapore</li>
                <li>Spain</li>
                <li>Turkey</li>
                <li>United Arab Emirates</li>
                <li>United Kingdom</li>
                <li>United States</li>
            </ul>
        </div>
      </footer>

  )
}
export default Footer
