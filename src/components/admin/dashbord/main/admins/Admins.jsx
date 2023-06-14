import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';

function Admins(sidebarOpen, openSidebar) {
    const links = [
        {label:'Admins',url:'/admin/admins/'  ,isActive:location.pathname == "/admin/admins/"},
        {label:'Create',url:'/admin/admins/create-admin/'  ,isActive:location.pathname == "/admin/admins/create-admin/"},
    ]
    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ];
    const data = [
        {name: 'John Doe', email: 'johndoe@gmail.com', phone: '+212 698471523' ,status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Jane Smith', email: 'janesmith@gmail.com', phone: '+212 698541542',status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Bob Johnson', email: 'bobjohnson@gmail.com', phone: '+212 6302347951', status:[ {name: 'Disabled' , class:'btn_yellow'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}]},
        {name: 'Alice Lee', email: 'alicelee@gmail.com', phone: '+212 620951010' , status:[ {name:'Activated' , class:'btn_green'}] , actions:[{name:'enable',class:'btn_green'},{name:'Disable',class:'btn_yellow'}, {name:'Delete',class:'btn_red'}] },
      ];
    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />
        </>  
    );
}

export default Admins;