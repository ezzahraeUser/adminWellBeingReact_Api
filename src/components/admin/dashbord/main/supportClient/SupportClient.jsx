import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';

function SupportClient(openSidebar , sidebarOpen) {
    const links = [
        {label:'Réclamation',url:''},
        {label:'Traités',url:''},
        
    ]
    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Email Confirmed', field: 'emailConfirmed' },
        { label: 'Text', field: 'text' },
        { label: 'Confirmed', field: 'confirmed' },
      ];
    const data = [
        {name: 'John Doe', email: 'Computer Science', phone: 3.8 ,emailConfirmed: 'Yes', text: 'N/A', confirmed: 'Yes'},
        {name: 'Jane Smith', email: 'Mathematics', phone: 3.5 ,emailConfirmed: 'Yes', text: 'N/A', confirmed: 'Yes'},
        {name: 'Bob Johnson', email: 'Engineering', phone: 3.2 ,emailConfirmed: 'Yes', text: 'N/A', confirmed: 'Yes'},
        {name: 'Alice Lee', email: 'Biology', phone: 3.9 ,emailConfirmed: 'Yes', text: 'N/A', confirmed: 'Yes'},
      ];
    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />
        </>
    );
}

export default SupportClient;