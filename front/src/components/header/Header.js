import React, { Component } from 'react';

import "./header.css"



const Header = () => {

  return (
    <div className='header'>
          <div className="headerTitles">
        <span className="headerTitleSm">Vent Spot</span>
        <span className="headerTitleLg">Sharing Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4992646/pexels-photo-4992646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  )
}

export default Header