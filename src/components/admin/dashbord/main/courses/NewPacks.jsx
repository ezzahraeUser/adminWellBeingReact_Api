import React, { useEffect, useState } from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import '../main.css'
import { useQuery } from 'react-query';
import { approuvePack, getPendingPacks, refusePack } from '../../../../../api/api__admin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function NewPacks(sidebarOpen, openSidebar) {
  const navigate = useNavigate();

    const links = [
        { label: 'Courses', url: '/admin/courses' ,isActive:location.pathname =="/admin/courses"},
        { label: 'New Courses', url: '/admin/courses/new-courses' ,isActive:location.pathname =="/admin/courses/new-courses" },
        { label: 'Packs', url: '/admin/courses/packs' ,isActive:location.pathname =="/admin/courses/packs" },
        { label: 'New Packs', url: '/admin/courses/new-packs' ,isActive:location.pathname =="/admin/courses/new-packs" },
        { label: 'Decipline', url: '/admin/courses/decipline' ,isActive:location.pathname =="/admin/courses/decipline" },
    
    ]
    const { data: pendingPacks, isLoading, error } = useQuery('courses', getPendingPacks);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else if (error) {
        return <p>An error occurred: {error.message}</p>;
    }



    const handleApprouvePack = (id) => {
        navigate(`/admin/courses/new-packs/approve-pack/${id}`);
        Swal.fire({
          title: 'Are you sure?',
          text: "Vous etes sûr d'approuver ce Pack?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
          if (result.isConfirmed) {
            approuvePack(id)
            Swal.fire(
              'Pack bien approuvé!',
            )
          }
        navigate(`/admin/courses/new-packs`);
        })
      };
      
      const handleRefusePack = (id) => {
        navigate(`/admin/courses/new-packs/decline-pack/${id}`);
        Swal.fire({
          title: 'Are you sure?',
          text: "Vous etes sûr de decliner et supprimer ce Pack?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Oui, decliner!'
        }).then((result) => {
          if (result.isConfirmed) {
            refusePack(id)
            Swal.fire(
              'Pack bien refusé!',
            )
          }
        navigate(`/admin/courses/new-packs`);
        })
      };
      

    const columns = [
        { label: 'Title', field: 'title' },
        { label: 'Decipline', field: 'dicipline' },
        { label: 'Vues', field: 'views_number' },
        { label: 'Video', field: 'courses_number' },

        { label: 'Price', field: 'price' },
        { label: 'Instructor', field: 'instructor' },
        { label: 'Level', field: 'level' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ]; 
              /****** */
              const data = pendingPacks.map((pendingPack) => ({
                title: pendingPack.titre,
                dicipline: pendingPack.discipline_name, // Remplacez par la logique appropriée pour récupérer la discipline
                views_number: pendingPack.views_number, // Remplacez par la logique appropriée pour récupérer la classe
                courses_number: pendingPack.courses_number,
                price: pendingPack.price,
                instructor:  pendingPack.instructor_name, // Remplacez par la logique appropriée pour récupérer l'instructeur
                level: pendingPack.niveau,
                
                status: [{ name:  `En attente`, class: 'btn_yellow' }],
                actions: [
                  { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouvePack(pendingPack.id)}},
                  { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefusePack(pendingPack.id)}},
                ],
              }));
            /*Les données des tableaux */
              

    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
            <Table columns={columns} data={data} />
            
        </>
    );
}

export default NewPacks;