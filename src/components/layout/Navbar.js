import React from 'react'
import {NavLink } from 'react-router-dom'

import '../../components/sass/Navbar.scss'

const Navbar = () => {
  return (
     <header className="cursor-light" id="main-nav">
    <nav className="nav nav__navbar-top-default">
      <div className="nav__nav-conntainer nav-check">

          <input type="radio" name="slide" id="menu-bar" />
          <input type="radio" name="slide" id="close-bar" /> 
                    
           <label for="menu-bar" className="nav__menu-bar">
             <span   className="nav__menu-span"></span>
         </label>    

          <input type="checkbox" id="show-search" />
         
          <div className="nav__logo logo"><NavLink to="/" exact>Greenium <span>Energy</span></NavLink></div>

          <div className="nav__nav-content nav-content">
              <ul className="nav__nav-list nav-list">
                <label for="close-bar" className="nav__nav-close">
                  <i className="fa fa-times"></i>
              </label>  
              <span className="nav__nav-item-pt"></span>
                  <li className="nav__nav-item nav-item ">
                      <NavLink to="/" exact className="nav__nav-a nav-a">Home</NavLink>
                  </li>
                  
                  <li className="nav__nav-item nav-item">
                      <NavLink to="/about" exact className="nav__nav-a nav-a  mobile-none">About</NavLink>
                      {/* <!-- <input type="checkbox" id="show-features"> --> */}
                      <NavLink to="/" exact>
                        <label for="show-features" className="nav__nav-label nav-label">About</label>
                      </NavLink>
                     
                  </li>
                  <li className="nav__nav-item nav-item">
                  <NavLink to="/services" exact className="nav__nav-a nav-a">Services</NavLink>
                  </li>
                  <li className="nav__nav-item nav-item">
                      <NavLink to="/contact" exact  className="nav__nav-a nav-a">Contact</NavLink>
                  </li>
              </ul>
              <label for="show-search" className="nav__search-icon search-icon"><i className="fas fa-search"></i></label>
              <form action="/" className="nav__search-box search-box">
                  <input type="text" placeholder="Type Something to Search..." required />
                  <button type="submit" className="nav__go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
                </form>
          </div>
      </div>
  </nav>

  </header>

  )
}

export default Navbar
