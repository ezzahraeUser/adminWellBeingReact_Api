import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Logout, token } from '../../api/api__admin';
import { Link, useNavigate } from 'react-router-dom';



function Navbar(props) {

  const navigate = useNavigate();

/**** */
const  handleLogout  =  async (e) => {
  try {
    Logout()
    // Effectuer les autres actions de déconnexion nécessaires
    navigate('/login')
    console.log("dashbord", token);
  } catch (error) {
  }
};
/**** */
  return (
    <nav className="navbar">
      
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          <h1>YOUGIK</h1>
        </a>
      </div>
      <div className="navbar__center">

      </div>
      <div className="navbar__right">
        <a href="/" className="navbar__link">Home</a>
        <a href="/" className="navbar__link">Courses</a>
        <div className="navbar__dropdown">
          <button className="navbar__dropdown-btn">
            <img src={profile} alt="profile" className='img_profile' />
          </button>
          <div className="navbar__dropdown-content    ">
            <a href="/">
              <img src={profile} alt="profile" className='img_profile' />
              <span className='span_admin'>
                AdminUser <span className='span_email'> adminyoga@yoga.com</span>
              </span>
            </a>
            <hr />
            <a href="/">
              <i className='icone_dashbord bi bi-speedometer2' ></i>
              My Dashbord
            </a>
            <a href="/">
              <i className='icone_dashbord bi bi-book-half' ></i>
              My Learning</a>
            <a href="/">
              <i className='icone_dashbord bi bi-bag' ></i>
              My Purchases</a>
            <a href="/">
              <i className='icone_dashbord bi bi-balloon-heart-fill' ></i>
              Wishlist</a>
            <a href="/">
              <i className='icone_dashbord bi bi-person-gear' ></i>
              Account Setting</a>
            <hr />
            <Link  onClick={handleLogout}>
              <i className='icone_dashbord bi bi-box-arrow-right' ></i>
              Log out </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;