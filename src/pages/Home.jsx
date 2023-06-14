import React, { useState } from 'react';

function Home({ }) {
  const disciplines = [
    {
      id: 1,
      name: 'Mathématiques',
      classes: [
        { id: 1, name: 'Classe A' },
        { id: 2, name: 'Classe B' },
        { id: 3, name: 'Classe C' },
      ],
    },
    {
      id: 2,
      name: 'Physique',
      classes: [
        { id: 4, name: 'Classe X' },
        { id: 5, name: 'Classe Y' },
      ],
    },
    {
      id: 3,
      name: 'Chimie',
      classes: [],
    },
  ];
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

  const handleDeleteDiscipline = (discipline) => {
    // Logique de suppression de la discipline
    console.log('Supprimer la discipline:', discipline);
  };

  const handleAddClass = (discipline) => {
    // Logique d'ajout de classe à la discipline
    console.log('Ajouter une classe à la discipline:', discipline);
  };

  return (
    <table className="discipline-table">
      <thead>
        <tr>
          <th>Discipline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {disciplines.map((discipline) => (
          <React.Fragment key={discipline.id}>
            <tr
              className={`discipline-row ${expandedDisciplines.includes(discipline.id) ? 'expanded' : ''}`}
              onClick={() => toggleClasses(discipline.id)}
            >
              <td>{discipline.name}</td>
              <td>
                <button>Editer</button>
                <button>Supprimer</button>
                <button>Add Classes</button>
              </td>
            </tr>
            {expandedDisciplines.includes(discipline.id) && (
              <tr>
                <td colSpan="2">
                  <ul>
                    {discipline.classes.map((classItem) => (
                      <li key={classItem.id}>
                        {classItem.name}
                        <button>Editer</button>
                        <button>Supprimer</button>
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
  );
}

export default Home;
