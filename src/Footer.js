import React from 'react'
import "./footer.css"
import {useState} from 'react';
import Divider from '@material-ui/core/Divider';
function Footer() {


//back to top-->
const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
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
      <div className='footer-line'>
      </div>
        <div className="rest-footer-2">
            <img src="public\amazon-logo.png" alt="logo"></img>
        </div>
        <div className="base">
            <div className='upper-base'>
            <div>
                <a href="#" className="font-bold mr-2">
                Conditions of Use
                </a>
            </div>
            <div>
                <a href="#" className="font-bold mr-2">
                Privacy Notice
                </a>
            </div>
            <div>
                <a href="#" className="font-bold mr-2">
                Interest-Based Ads
                </a>
            </div>
            </div>
            <div className='lower-base'>
            <span className="text-gray-400">
            &copy; 1996-2021, Amazon.com, Inc. or its affiliates
            </span>
        </div>

      </div>  
    </footer>

      )}
export default Footer
