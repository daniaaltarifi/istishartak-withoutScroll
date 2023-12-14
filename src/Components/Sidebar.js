import React, { useState } from 'react';
// import '../Style/Sidebar.css';
import LandingPage from './LandingPage';
import { Link } from "react-router-dom";
import '../Style/LandingPage.css'
import '../Style/Sidebar.css'
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleNav() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="container-fluid">
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Link to="/#HOME">HOME</Link>
        <Link to="/#BOOKING">BOOKING</Link>
        <Link to="/#OURDOCTOR">OUR DOCTORS</Link>
        <Link to="/#FORDOCTOR">FOR DOCTORS</Link>
        <Link to="/#SPECIALTIES">SPECIALTIES</Link>
        <Link to="/#DOWNLOAD">DOWNLOAD</Link>
        <Link to="/#CONTACT">CONTACT</Link>
        <Link to={'/privacypolicy'}> PRIVACY POLICY</Link>
        <Link to={'/termsandconditions'}>TERMS AND CONDITIONS</Link>

        <a href="#">LOGIN</a>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <div id="main">
            <i
              className={`fa-solid fa-bars fa-xl toggle_menu ${isSidebarOpen ? 'active' : ''}`}
              style={{ color: "#048897" }}
              onClick={toggleNav}
            ></i>
          </div>
        </div>
        <div className="col-lg-10  ">
          <div >
            <img src={require("../Images/logo.png")} className='logo logo_privacy' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
