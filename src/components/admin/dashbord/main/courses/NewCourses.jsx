import React from 'react';
import Table from '../Table';
import NavbarDash from '../../navbar/NavbarDash';
import { approuveCourse, getPendingCourses, refuseCourse } from '../../../../../api/api__admin';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function NewCourses({sidebarOpen, openSidebar}) {
  const navigate = useNavigate();
  const links = [
    { label: 'Courses', url: '/admin/courses' ,isActive:location.pathname =="/admin/courses"},
    { label: 'New Courses', url: '/admin/courses/new-courses' ,isActive:location.pathname =="/admin/courses/new-courses" },
    { label: 'Packs', url: '/admin/courses/packs' ,isActive:location.pathname =="/admin/courses/packs" },
    { label: 'New Packs', url: '/admin/courses/new-packs' ,isActive:location.pathname =="/admin/courses/new-packs" },
    { label: 'Decipline', url: '/admin/courses/decipline' ,isActive:location.pathname =="/admin/courses/decipline" },

]

const { data: pendingCourses, isLoading, error } = useQuery('pendingCourses', getPendingCourses);

if (isLoading) {
  return <p>Loading...</p>;
}
else if (error) {
  return <p>An error occurred: {error.message}</p>;
}

const handleApprouveCourse = (id) => {
  navigate(`/admin/courses/new-courses/approve-course/${id}`);
  Swal.fire({
    title: 'Are you sure?',
    text: "Vous etes sûr d'approuver ce cours?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, approve it!'
  }).then((result) => {
    if (result.isConfirmed) {
      approuveCourse(id)
      Swal.fire(
        'Cours bien approuvé!',
      )
    }
  navigate(`/admin/courses/new-courses`);
  })
};

const handleRefuseCourse = (id) => {
  navigate(`/admin/courses/new-courses/approve-course/${id}`);
  Swal.fire({
    title: 'Are you sure?',
    text: "Vous etes sûr de decliner et supprimer ce cours?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, decline it!'
  }).then((result) => {
    if (result.isConfirmed) {
      refuseCourse(id)
      Swal.fire(
        'Cours bien approuvé!',
      )
    }
  navigate(`/admin/courses/new-courses`);
  })
};

        /*Les données des tableaux */
        const columns = [
            { label: 'Title', field: 'title' },
            { label: 'Price', field: 'price' },
            { label: 'Decipline', field: 'dicipline' },
            { label: 'Class', field: 'class' },
            { label: 'Instructor', field: 'instructor' },
            { label: 'Views', field: 'views_number' },
            { label: 'Level', field: 'level' },
            { label: 'Status', field: 'status' },
            { label: 'Actions', field: 'actions' },
          ]; 
          /****** */
          const data = pendingCourses.map((course) => ({
            title: course.titre,
            price: course.price,
            dicipline:  course.discipline_name, // Remplacez par la logique appropriée pour récupérer la discipline
            class: course.classe_name, // Remplacez par la logique appropriée pour récupérer la classe
            instructor:  course.instructor_name, // Remplacez par la logique appropriée pour récupérer l'instructeur
            views_number: course.views_number,
            level: course.nivaeu,
            status: [{ name:  `En attente`, class: 'btn_yellow' }],
            actions: [
              { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleApprouveCourse(course.id)}},
              { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseCourse(course.id)}},
            ],
          }));
          /*********** 
           *           const datas = [
            { title: pendingCourses.titre , price: pendingCourses.price, dicipline: pendingCourses.discipline_id , class: pendingCourses.classe_id, instructor: pendingCourses.instructor_id , views_number: pendingCourses.views_number, level:pendingCourses.nivaeu, status:[ {name:'Pending' , class:'btn_yellow'}] , actions:[{name:'Approve Now',class:'btn_green'},{name:'Decline',class:'btn_red'}]}, 

            { title: 'Yoga doux pour la détente et le bien-être', price: '75$', dicipline: 'Yoga classes', class: 'Vinyasa', instructor: 'Sophia Smith', views_number: '1', level:'Advanced', status:[ {name:'Pending' , class:'btn_yellow'}] , actions:[{name:'Approve Now',class:'btn_green'},{name:'Decline',class:'btn_red'}]}, 
            { title: 'Méditation et yoga pour réduire le stress', price: '80$', dicipline: 'Yoga classes', class: 'Vinyasa', instructor: 'Sophia Smith', views_number: '8', level:'Beginner', status:[ {name:'Pending' , class:'btn_yellow'}] , actions:[{name:'Approve Now',class:'btn_green'},{name:'Decline',class:'btn_red'}]},
             { title: 'Yoga doux pour la détente et le bien-être', price: '39$', dicipline: 'Yoga classes', class: 'Derviche', instructor: 'Sophia Smith', views_number: '12', level:'Intermediate', status:[ {name:'Pending' , class:'btn_yellow'}] , actions:[{name:'Approve Now',class:'btn_green'},{name:'Decline',class:'btn_red'}]},
              { title: 'Yoga doux pour la détente et le bien-être', price: '44$', dicipline: 'Yoga classes', class: 'Vinyasa', instructor: 'Sophia Smith', views_number: '18', level:'Beginner', status:[ {name:'Pending' , class:'btn_yellow'}] , actions:[{name:'Approve Now',class:'btn_green'},{name:'Decline',class:'btn_red'}]},
          ];
          */
    return (
        
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
            <Table columns={columns} data={data} />
        </>
    );
}

export default NewCourses;