import React, { useState } from "react";
import Logo from "../../assets/logo/inJECT.png";
import "./Header.scss";
import { NavLink } from "react-router-dom";
//import Aos from aos;
//import 'aos/dist/aos.css'


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const changeBackgroundOnScroll = ()=> {
    window.scrollY > 120 ? setScrolled(true) : setScrolled(false)
  }
  window.addEventListener('scroll', changeBackgroundOnScroll);
  return (
    <section  className={scrolled ? "header--scrolled":"header"  }>
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </NavLink>
      <div className="header__container">
        <NavLink activeClassName="" to="/dashboard" className='header__button'>
          See Jobs
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/postjob" className='header__button'>
          Post Jobs
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/jobsbyyou" className='header__button'>
          Jobs By You
        </NavLink>
        <NavLink activeClassName="active" to="/aboutus" className='header__button'>
          About
        </NavLink>
      </div>
   
    </section>
  );
}

export default Header;
