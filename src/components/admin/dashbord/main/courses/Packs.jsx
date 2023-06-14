import React, { useEffect, useState } from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import '../main.css'
import { getPacks } from '../../../../../api/api__admin';
import { useQuery } from 'react-query';

function Packs(sidebarOpen, openSidebar) {
    const links = [
        { label: 'Courses', url: '/admin/courses' ,isActive:location.pathname =="/admin/courses"},
        { label: 'New Courses', url: '/admin/courses/new-courses' ,isActive:location.pathname =="/admin/courses/new-courses" },
        { label: 'Packs', url: '/admin/courses/packs' ,isActive:location.pathname =="/admin/courses/packs" },
        { label: 'New Packs', url: '/admin/courses/new-packs' ,isActive:location.pathname =="/admin/courses/new-packs" },
        { label: 'Decipline', url: '/admin/courses/decipline' ,isActive:location.pathname =="/admin/courses/decipline" },
    
    ]
    const { data: packs, isLoading, error } = useQuery('courses', getPacks);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else if (error) {
        return <p>An error occurred: {error.message}</p>;
    }
        /*Les données des tableaux level laguage description*/
        const columns = [
            { label: 'Title', field: 'title' },
            { label: 'Decipline', field: 'dicipline' },
            { label: 'Vues', field: 'views_number' },
            { label: 'Videos', field: 'courses_number' },
            { label: 'Price', field: 'price' },
            { label: 'Instructor', field: 'instructor' },
            { label: 'Level', field: 'niveau' },
            { label: 'Status', field: 'status' },
          ]; 
                 /*Les données des tableaux level laguage description*/
                  /****** */
    const data = packs.map((pack) => ({
        title: pack.titre,
        dicipline:  pack.discipline_name, // Remplacez par la logique appropriée pour récupérer la discipline
        views_number: pack.views_number,
        courses_number: pack.courses_number,
        price: pack.price,
        instructor:  pack.instructor_name, // Remplacez par la logique appropriée pour récupérer l'instructeur
        niveau: pack.niveau,
        status: [{ name: pack.status, class: pack.status =='refusé'?'btn_red': 'btn_green' }],
    }));
          
  

    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
            <Table columns={columns} data={data} />
            
        </>
    );
}

export default Packs;