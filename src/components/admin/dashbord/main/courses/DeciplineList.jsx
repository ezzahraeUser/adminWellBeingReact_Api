import React, { useState } from 'react';
import DeciplineFormEdit from './DeciplineFormEdit';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteClass, deleteDiscipline, fetchDisciplines } from '../../../../../api/api__admin';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

function    DeciplineList({ }) {
  const { id } = useParams();

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
 

  const [expandedDisciplines, setExpandedDisciplines] = useState([]);
  
    const toggleClasses = (disciplineId) => {
      if (expandedDisciplines.includes(disciplineId)) {
        setExpandedDisciplines(expandedDisciplines.filter((id) => id !== disciplineId));
      } else {
        setExpandedDisciplines([...expandedDisciplines, disciplineId]);
      }
    }
  
  const [expandedDiscipline, setExpandedDiscipline] = useState(null);

  const toggleClassList = (discipline) => {
    if (expandedDiscipline === discipline) {
      setExpandedDiscipline(null);
    } else {
      setExpandedDiscipline(discipline);
    }
  };

  const handleEditDiscipline = (discipline) => {
    // Logique de modification de la discipline
    console.log('Modifier la discipline:', discipline);
  };

  const handleDeleteDiscipline = (disciplineId) => {
    // Logique de suppression de la discipline
    console.log('Supprimer la discipline avec l\'ID:', disciplineId);
    Swal.fire({
      title: 'Vous êtes sûr?',
      text: "Attention tous les classes, cours,... associé à cette discipline vont être supprimés!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprmer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Discipline Bien supprimée!',
          'avec succés'
        );
        deleteDiscipline(disciplineId);
        // Ajoutez ici le code pour supprimer la discipline
        navigate("/admin/courses/decipline")
      }
    navigate("/admin/courses/decipline")

    });
  };
  
  const handleDeleteClasse = (ClasseId) => {
    // Logique de suppression de la discipline
    console.log('Supprimer la discipline avec l\'ID:', ClasseId);
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
        deleteClass(ClasseId);
        // Ajoutez ici le code pour supprimer la discipline
        navigate("/admin/courses/decipline")
      }
      navigate("/admin/courses/decipline")

    });
  };

  const handleAddClass = (discipline) => {
    // Logique d'ajout de classe à la discipline
    console.log('Ajouter une classe à la discipline:', discipline);
  };
/***** React query */
  const { data: disciplinesData, isLoading, error } = useQuery('disciplines', fetchDisciplines);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  else if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  /******* */

  return (
    <div className='justify_center main_container'>
    <table className="discipline-table">
    <thead className='disciplineheader'>
      <tr>
        <th colSpan="">
          Disciplines
        </th>
      </tr>
    </thead>

      <tbody className=''>
        {disciplinesData.map((discipline) => (
          <React.Fragment key={discipline.id}>
            <tr onClick={() => toggleClasses(discipline.id)}
              className={`discipline-row ${expandedDisciplines.includes(discipline.titre) ? 'expanded' : ''}`}
            >
              <td >{discipline.titre}</td>
              <td>
                <button className='btn text_white ' onClick={() => { navigate(`/admin/courses/decipline/create-class/${discipline.id}`)}}>+</button>{/* Add */}
                <button className='btn text_white' onClick={() => { navigate(`/admin/courses/decipline/edit-decipline/${discipline.id}`)}}><i className="bi bi-pencil-square  text_white"></i></button>{/* Update */}
                {modalOpen && <DeciplineFormEdit setOpenModal={setModalOpen} />}
                <button className='btn text_white' onClick={() =>{ handleDeleteDiscipline(discipline.id); navigate(`/admin/courses/decipline/delete-decipline/${discipline.id}`)}}><i className="bi bi-trash3 text_white"></i></button>
              </td>
            </tr>
            {expandedDisciplines.includes(discipline.id) && (
              <tr className='decipline_classe_tr'>
                <td colSpan="2 " className='decipline_classe_tr' >
                  <ul className='decipline_classe'>
                    {discipline.classes.map((classItem) => (
                    <li className='decipline_classe_item ' key={classItem.id}>
                        <p className='justify_start'>{classItem.titre}</p>
                    <div className='justify_end'>
                    {/* Update */}
                  <button className='btn btn_sm text_white'   onClick={() => { navigate(`/admin/courses/decipline/edit-class/${classItem.id}` , { state: classItem })}} ><i className="bi bi-pencil-square text_white justify_end "></i></button>
                  {/* Delete */}
                  <button className=' btn btn_sm text_white' onClick={() =>{ handleDeleteClasse(classItem.id); navigate(`/admin/courses/decipline/delete-classe/${classItem.id}`)}}><i className="bi bi-trash3 text_white"></i></button>
                    </div>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table> 
    </div>
  );
}

export default DeciplineList;
