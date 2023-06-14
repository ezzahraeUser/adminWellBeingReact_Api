import React from 'react';
import "./navbarDash.css";
import { Link } from 'react-router-dom';

function NavbarDash({links }) {
    
    return (
        <div className='navbarDash'>
            <div className="navbar_left">
                {links.map((link, index) => (
                    <Link to={link.url} key={index}  className={link.isActive ? 'active_link' : ''} >{link.label}</Link>
                ))}
            </div>
        </div>
    );
}

export default NavbarDash;


