import React, { useState } from 'react';
import NavbarDash from '../../navbar/NavbarDash';



function CreateAdmin(sidebarOpen, openSidebar) {
 
    const links = [
        {label:'Admins',url:'/admin/admins/'  ,isActive:location.pathname == "/admin/admins/"},
        {label:'Create',url:'/admin/admins/create-admin/'  ,isActive:location.pathname == "/admin/admins/create-admin/"},
    ]
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, e.g. send it to a server
    };

    return (<>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
    
        <form onSubmit={handleSubmit} className="form_instructor">
            <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="form_group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                />
            </div>
            <button type="submit" className='btn_create'>Create</button>
        </form></>
    );
}

export default CreateAdmin;