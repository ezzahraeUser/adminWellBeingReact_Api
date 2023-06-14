import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../navbars/navbar';
import { token, userData } from '../../api/api__admin';

function AdminLayout(props) {
    if (! token || userData.role != 'admin') {
        try {
            return <Navigate to="/login"/>
            
        } catch (error) {
           console.log(error) 
        }
    }
    return (
        <>
            <Navbar/>
            <Outlet key="0"/>
        </>
    );
}

export default AdminLayout;