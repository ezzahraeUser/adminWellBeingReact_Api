import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../navbars/navbar';
import { token, userData } from '../../api/api__admin';

function InstructorLayout() {

    if (! token || userData.role != 'instructor') {
        try {
            return <Navigate to="/login"/>
            
        } catch (error) {
           console.log(error) 
        }
    }
    return (
        <>
            <Navbar/>
            <div className="container_instructor">
            <Outlet/>
            </div>
        </>
    );
}

export default InstructorLayout;