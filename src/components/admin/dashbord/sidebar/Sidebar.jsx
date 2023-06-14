import React from 'react';
import "./sidebar.css";
import { Link,  } from 'react-router-dom';

function Sidebar({sidebarOpen, openSidebar }) {
    const sidebarLinks = [
        {label:'Dashboard',url:'/admin',isActive:location.pathname =="/admin"},
        {label:'Courses',url:'/admin/courses',isActive:location.pathname.startsWith('/admin/courses')},
        {label:'Instructors',url:'/admin/instructors',isActive:location.pathname.startsWith('/admin/instructors')},
        {label:'Students',url:'/admin/students',isActive:location.pathname.startsWith('/admin/students')},
        {label:'Paiements',url:'/admin/paiements',isActive:location.pathname.startsWith('/admin/paiements')},
        {label:'Suport Client',url:'/admin/support-client',isActive:location.pathname.startsWith('/admin/support-client')},
        {label:'Admins',url:'/admin/admins',isActive:location.pathname.startsWith('/admin/admins')},
    ]
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <i className="bi bi-x-lg" id="sidebarIcon" onClick={() => openSidebar()}></i>
            </div>
            <div className="sidebar_menu">
                {sidebarLinks.map((sidebarLink , index) =>(
                <div className="sidebar_link " key={index}>
                    <Link key={index} to={sidebarLink.url} className={sidebarLink.isActive ? 'active_menu_link' : ''}>{sidebarLink.label}</Link>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;