import React from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'
import search_icon from "../components/images/search_icon.png"
import user_icon from "../components/images/user_icon.png"
import wishlish_inactive from "../components/images/wishlish-inactive.png"
import bag_empty from "../components/images/bag-empty.png"
const Header = () => {
  return (
    <div className='header-container'>
      <div className="myntra-logo">
        <img style={{width: '62px',height:'65px', paddingTop:"3px"}} src="https://constant.myntassets.com/web/assets/img/icon.5d108c858a0db793700f0be5d3ad1e120a01a500_2021.png" alt="" />
      </div>
      <div className="men-link"><strong>MEN</strong></div>
      <div className=""><strong>WOMEN</strong></div>
      <div className=""><strong>KIDS</strong></div>
      <div className="home-and-living"><strong>HOME & LIVING</strong></div>
      <div className=""><strong>BEAUTY</strong></div>
      <div className="studio"><strong>STUDIO<sup style={{color:"red"}}>NEW</sup></strong></div>
      <div className=""></div>
      
      <div className='user-wish-bag' >
        <div className="search-input">
          <img src={search_icon} alt="" />
          <input           
            type="text" 
            placeholder='Search for products, brands & more' />
        </div>
          <div className="">
            <div><img src={user_icon} alt="" /></div>
            <div>Profile</div>
          </div>
          <div className="">
            <div><img src={wishlish_inactive} alt="" /></div>
            <div>Wishlist</div>
          </div>
          <div className="">
            <div><img src={bag_empty} alt="" /></div>
            <div>Bag</div>
          </div>
        </div>
    </div>
  )
}

export default Header
