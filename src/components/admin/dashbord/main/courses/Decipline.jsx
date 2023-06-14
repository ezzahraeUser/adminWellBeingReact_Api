import React, { useState } from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import '../main.css'
import DeciplineList from './DeciplineList';
import DeciplineForm from './DeciplineForm';
import { Navigate, useNavigate } from 'react-router-dom';

function Decipline(sidebarOpen, openSidebar) {
  const links = [
    { label: 'Courses', url: '/admin/courses' ,isActive:location.pathname =="/admin/courses"},
    { label: 'New Courses', url: '/admin/courses/new-courses' ,isActive:location.pathname =="/admin/courses/new-courses" },
    { label: 'Packs', url: '/admin/courses/packs' ,isActive:location.pathname =="/admin/courses/packs" },
    { label: 'New Packs', url: '/admin/courses/new-packs' ,isActive:location.pathname =="/admin/courses/new-packs" },
    { label: 'Decipline', url: '/admin/courses/decipline' ,isActive:location.pathname =="/admin/courses/decipline" },
]
const [modalOpen, setModalOpen] = useState(false);


const handleOpenModal = () => {
  setModalOpen(true);
  navigate('/admin/courses/decipline/create-decipline');
};
/**** */



  /*****  */

  const [discipline, setDiscipline] = useState('');
  const [classes, setClasses] = useState([]);

  const navigate = useNavigate();



  return (
    <>
      <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
      <div className='justify_center main_container'>
      <div className='justify_center'>
                <button className="btn openModalBtn"  onClick={() => { handleOpenModal()}}>New Descipline</button>
            </div>
                {modalOpen && <DeciplineForm setOpenModal={setModalOpen} />}
              <DeciplineList/>
      </div>


    </>
  );
}

export default Decipline;