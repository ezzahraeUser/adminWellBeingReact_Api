import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import '../main.css'
import Table from '../Table';

function Students(sidebarOpen, openSidebar) {
    /*Les liens de mini_navbar de sidebar */
    const links = [
        {label:'Students',url:'/admin/students',isActive:location.pathname == "/admin/students"},
        {label:'Subscribers',url:'/admin/students/subscribers',isActive:location.pathname == "/admin/students/subscribers"},
     ]
    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Courses', field: 'courses' },
        { label: 'Registration Date', field: 'registration_date' },
        { label: 'Access', field: 'status' },
      ];
    const data = [
        {name: 'John Doe', email: 'janesmith@gmail.com', phone: '+212 698471523' , courses: '2',registration_date:'11/01/2022', status:[ {name:'Buyer' , class:'btn_pink'}], },
        {name: 'Jane Smith', email: 'janesmith@gmail.com', phone: '+212 698544714' , courses: '11',registration_date:'18/05/2023', status:[ {name:'Buyer' , class:'btn_pink'}],},
        {name: 'Bob Johnson', email: 'janesmith@gmail.com', phone: '+212 621325448' ,courses: '7',registration_date:'01/02/2023', status:[ {name:'Buyer' , class:'btn_pink'}],},
        {name: 'Alice Lee', email: 'janesmith@gmail.com', phone: '+212 659624847', courses: '16',registration_date:'10/09/2022', status:[ {name:'Buyer' , class:'btn_pink'}],},
      ];

    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />

        </>
    );
}

export default Students;