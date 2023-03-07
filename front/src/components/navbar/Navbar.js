import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [Mobile, setMobile] = useState(false)

  const user = true;
  return (
    <nav>
        <div className='topLeft'>
        <i id="topIcon" class="fab fa-youtube"></i>
        <i id="topIcon" class="fab fa-instagram"></i>
        <i id="topIcon" class="fab fa-twitter"></i>
        <i id="topIcon" class="fab fa-instagram"></i>
        </div>
        <div className='topCenter'>
          <ul className={Mobile ? "nav-links-mobile" : "topList"} onClick={() => setMobile(false)}
>
            <li className='topListItem'><Link id="topListItem" to="/">Home</Link></li>
            <li className='topListItem'><Link id="topListItem" to="/about">About</Link></li>
            <li className='topListItem'><Link id="topListItem" to="/contact">Contact</Link></li>
            {user && <li className="topListItem">Logout</li>}
            <div className='navbar-bottom'>
            <div className="profile-card">
                <div className="top">
                  <p>Hi user</p>
                  <h3>Welcome Back</h3>
                </div>
                <div className="bottom">
                  <span>New Post</span>
                  <span>Log Out</span>
                </div>
            </div>

        </div>
        <p className="copyright-text">
          Copyright 2023 © Jayadad
        </p>
          </ul>

        </div>
        <div className='topRight'>
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>

        )}

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
        </button>
        </div>
    </nav>
  )
}

export default Navbar