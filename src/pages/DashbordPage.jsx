import React, { useState } from 'react';
import Sidebar from '../components/admin/dashbord/sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

function DashbordPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

const location = useLocation();

    return (
        <div className='containerDash'>
            <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <div className="nav_icon" >
                <button className='btn_sidebar' onClick={() => openSidebar()}>Sidebar Menu</button>
            </div>
            <div>
            <Outlet key={location.pathname} />
            </div>
        </div>
    );
}

export default DashbordPage;