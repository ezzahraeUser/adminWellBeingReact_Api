import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import { getInstructors } from '../../../../../api/api__admin';
import { useQuery } from 'react-query';

function RequestsInstructor(sidebarOpen, openSidebar) {


    const links = [
        { label: 'Instructors', url: '/admin/instructors', isActive: location.pathname == "/admin/instructors"},
        { label: 'Requests', url: '/admin/instructors/requests', isActive: location.pathname =="/admin/instructors/requests" },
    ]

    const { data: instructors, isLoading, error } = useQuery('instructors', getInstructors);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else if (error) {
        return <p>An error occurred: {error.message}</p>;
    }

    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ];

      const data = instructors.map((instructor) => ({
        name: instructor.name,
        email: instructor.email, // Remplacez par la logique appropriée pour récupérer la discipline
        phone:'06 65 98 45 12', // Remplacez par la logique appropriée pour récupérer la classe
        courses_number: '0',
        
        status: [{ name:  `En attente`, class: 'btn_yellow' }],
        actions: [
          { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouveCourse(course.id)}},
          { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseCourse(course.id)}},
        ],
      }));



    const datas = [
        {name: 'John Doe', email: 'johndoe@gmail.com', phone: '+212 698471523' , courses_number: '40',          status: [{ name:  `En attente`, class: 'btn_yellow' }],
        actions: [
          { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouveCourse(course.id)}},
          { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseCourse(course.id)}},
        ],},
        {name: 'Instructor example', email: 'Instructorexample@gmail.com', phone: '+212 698471523' ,courses_number: '40',          status: [{ name:  `En attente`, class: 'btn_yellow' }],
        actions: [
          { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouveCourse(course.id)}},
          { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseCourse(course.id)}},
        ],},
              {name: 'Houda', email: 'houda@gmail.com', phone: '+212 698471523' ,courses_number: '40',          status: [{ name:  `En attente`, class: 'btn_yellow' }],
        actions: [
          { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouveCourse(course.id)}},
          { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseCourse(course.id)}},
        ],},
      ];
    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={datas} />
        </>  
    );
}

export default RequestsInstructor;