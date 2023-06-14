import React, { useState } from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import '../main.css'

function Deciplinee(sidebarOpen, openSidebar) {
  const links = [
    { label: 'Courses', url: '/admin/courses/', isActive: location.pathname == "/admin/courses/" },
    { label: 'New Courses', url: '/admin/courses/new-courses/', isActive: location.pathname == "/admin/courses/new-courses/" },
    { label: 'Packs', url: '/admin/courses/packs/', isActive: location.pathname == "/admin/courses/packs/" },
    { label: 'New Packs', url: '/admin/courses/new-packs/', isActive: location.pathname == "/admin/courses/new-packs/" },
    { label: 'Decipline', url: '/admin/courses/decipline/', isActive: location.pathname == "/admin/courses/decipline/" },

  ]
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal)
  };

  const handleSave = () => {
    if (window.confirm("Êtes-vous sûr ?")) {
      handleOpenModal();
    }
  };
  /*****  */

  const [discipline, setDiscipline] = useState('');
  const [classes, setClasses] = useState([]);

  const handleAddDiscipline = () => {
    if (discipline.trim() !== '') {
      const newDiscipline = { name: discipline, classes: [] };
      setClasses([...classes, newDiscipline]);
      setDiscipline('');
    }
  };
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [classToAdd, setClassToAdd] = useState('');

  const handleAddClass = () => {
    if (classToAdd.trim() !== "") {
      const newClass = { name: classToAdd };
      const updatedClasses = [...classes];
      const disciplineToUpdate = updatedClasses.find(
        (discipline) => discipline.name === selectedDiscipline
      );
      if (disciplineToUpdate) {
        disciplineToUpdate.classes.push(newClass);
        setClasses(updatedClasses);
      }
      setClassToAdd("");
    }
  };



  return (
    <>
      <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
      <div className='justify_start main_container'>
        <button className='btn btn_ajouter' onClick={handleOpenModal}>Ajouter Decipline</button>
      </div>

      {showModal && (
        <div className="modal ">
          <div className="modal_content">


            <div>
              <h2>Ajouter une discipline</h2>
              <input
                type="text"
                placeholder="Nom de la discipline"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              />
              <button onClick={handleAddDiscipline}>Ajouter</button>
              <h2>Ajouter une classe</h2>

              <label>Sélectionner une discipline :</label>
              <select value={selectedDiscipline} onChange={(e) => setSelectedDiscipline(e.target.value)}>
                <option value="">-- Sélectionner --</option>
                {classes.map((discipline) => (
                  <option key={discipline.name} value={discipline.name}>
                    {discipline.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Nom de la classe"
                value={classToAdd}
                onChange={(e) => setClassToAdd(e.target.value)}
              />
              <button onClick={handleAddClass}>Ajouter</button>

              <h2>Liste des disciplines et classes</h2>
              {classes.map((discipline, index) => (
                <div key={index}>
                  <h3>{discipline.name}</h3>
                  <ul>
                    {discipline.classes.map((classItem, classIndex) => (
                      <li key={classIndex}>{classItem.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>


            <div className="modal-buttons">
              <button className='btn' onClick={handleSave}>Enregistrer</button>
              <button className='btn' onClick={handleOpenModal}>Fermer</button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Deciplinee;