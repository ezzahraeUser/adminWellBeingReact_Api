import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';

function Subscription(sidebarOpen, openSidebar) {
    const links = [
        {label:'Subscribers',url:'/admin/instructors/'  ,isActive:location.pathname == "/admin/instructors/"},
        {label:'Courses',url:'/admin/instructors/create-instructor/'  ,isActive:location.pathname == "/admin/instructors/create-instructor/"},
        {label:'Consultations',url:'/admin/instructors/create-instructor/'  ,isActive:location.pathname == "/admin/instructors/create-instructor/"},
    ]
    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Courses', field: 'courses' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ];
    const data = [
        {name: 'John Doe', email: 'johndoe@gmail.com', phone: '+212 698471523' ,courses: '40',status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Jane Smith', email: 'janesmith@gmail.com', phone: '+212 698541542' ,courses: '12',status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Bob Johnson', email: 'bobjohnson@gmail.com', phone: '+212 6302347951' ,courses: '130', status:[ {name: 'Disabled' , class:'btn_yellow'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Alice Lee', email: 'alicelee@gmail.com', phone: '+212 620951010' ,courses: '8', status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}] },
      ];
    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />
        </>  
    );
}

export default Subscription;