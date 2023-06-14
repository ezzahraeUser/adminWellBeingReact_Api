import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import { activateInstructor, desactivateInstructor, getInstructors } from '../../../../../api/api__admin';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Instructors(sidebarOpen, openSidebar) {
  const navigate = useNavigate();


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
    /*****Delete Istructor */
  const handleDeleteInstructor = (InstructorId) => {
    // Logique de suppression de la discipline
    console.log('Supprimer le compte de cette instructeur avec l\'ID:', InstructorId);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        deleteClass(InstructorId);
        // Ajoutez ici le code pour supprimer la discipline
        navigate("/admin/courses/decipline")
      }
      navigate("/admin/courses/decipline")

    });
  };
/******Activer Instructeur */
  
const handleActivateInstructor = (InstructorId) => {
  navigate("/admin/instructors/activate")

  console.log('Activer le compte de cette instructeur avec l\'ID:', InstructorId);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to active this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, active it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Activated!',
        'Instructor has been activated.',
        'success'
      );
      activateInstructor(InstructorId);
      navigate("/admin/instructors/")
    }
    navigate("/admin/instructors")

  });
};
/******Desactiver Instructeur */
const handleDesactivateInstructor = (InstructorId) => {
  navigate("/admin/instructors/desactivate")
  console.log('Désactiver le compte de cette instructeur avec l\'ID:', InstructorId);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to active this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, active it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Desactivated!',
        'Instructor has been desactivated.',
        'success'
      );
      desactivateInstructor(InstructorId);
      navigate("/admin/instructors/")
    }
    navigate("/admin/instructors")

  });
};
      /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Courses', field: 'courses_number' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ];
     
      const data = instructors.map((instructor) => ({
        name: instructor.name,
        email: instructor.email, // Remplacez par la logique appropriée pour récupérer la discipline
        phone:'06 65 98 45 12', // Remplacez par la logique appropriée pour récupérer la classe
        courses_number: '0',
        
        status: [{ name: instructor.status == 0 ? 'Désactivé' : 'Activé', class: instructor.status == 0 ?'btn_yellow': 'btn_green' }],
        actions: [
          { name: 'Activer', class: 'btn_yellow' , onclick: () => {  instructor.status ==  1 ?  Swal.fire('Activated!', 'Instructeur déja activé.',  'warning') : handleActivateInstructor(instructor.id)}},
          { name: 'Désactiver', class: 'btn_green',onclick: () => { instructor.status == 0 ?  Swal.fire('Déctivated!', 'Instructeur déja Désactivé.',  'warning')  : handleDesactivateInstructor(instructor.id)}},
          { name: 'Suppimer', class: 'btn_red',onclick: () => {  handleDeleteInstructor(instructor.id)}},
        ],
      }));



    const datas = [
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

export default Instructors;