import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbars/navbar'; "../navbars/Navbar";

function DefaultLayout(props) {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default DefaultLayout;