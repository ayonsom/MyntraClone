import React from 'react';
import './FooterHome.css';

import google_play_button from '../components/footerImages/google_play_button.png'
import app_store_button from "../components/footerImages/app_store_button.png"
import facebook_icon from '../components/footerImages/facebook_icon.png'
import twitter_icon from '../components/footerImages/twitter_icon.png'
import youtube_icon from '../components/footerImages/youtube_icon.png'
import instagram_icon from '../components/footerImages/instagram_icon.png'

import icon_original from "../components/footerImages/icon-original.png"
import Return_Window_image from "../components/footerImages/Return-Window-image.png"

const FooterHome = () => {
  return (
    <footer className="footer">
      <div style={{paddingLeft:'50px'}} className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Gift Cards</li>
          <li>Myntra Insider</li>
        </ul>
        <h4>USEFUL LINKS</h4>
        <ul>
          <li>Blog</li>
          <li>Careers</li>
          <li>Site Map</li>
          <li>Corporate Information</li>
          <li>Whitehat</li>
          <li>Cleartrip</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CUSTOMER POLICIES</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Terms Of Use</li>
          <li>Track Orders</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>Returns</li>
          <li>Privacy policy</li>
          <li>Grievance Officer</li>
        </ul>
      </div>
      {/* <div className="footer-section">
        
      </div> */}
      <div className="footer-section">
        <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
        <div className="app-buttons">
          <span >
            <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
              <img style={{height:'44px'}} src={google_play_button} alt="Get it on Google Play" />
            </a>
            <a href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059">
              <img  src={app_store_button} alt="Download on the App Store" />
            </a>    
          </span>
        </div>
        <div className="social-media">
          <h4>KEEP IN TOUCH</h4>
          <a href="https://www.facebook.com/myntra"><img src={facebook_icon}></img></a>
          <a href="https://twitter.com/myntra"><img src={twitter_icon}></img></a>
          <a href="https://www.youtube.com/user/myntradotcom"><img style={{width:'35px'}} src={youtube_icon}></img></a>
          <a href="https://www.instagram.com/myntra"><img src={instagram_icon}></img></a>
          
        </div>
      </div>
      <div className="footer-section">
        <div className="guarantee">
            <div><img src={icon_original} alt="" /></div>
            <div><p><strong>100% ORIGINAL</strong> <span style={{color:'grey'}}>guarantee for all products at myntra.com</span></p></div>      
        </div>
        <div className="return-policy">
            <div><img src={Return_Window_image} alt="" /></div>
            <div><p><strong>Return within 14 days</strong> <span style={{color:'grey'}}>of receiving your order</span></p></div>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
