import React, { useState } from "react";
import {  updateClass } from "../../../../../api/api__admin";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function EditClassForm({  }) {
  
  const location = useLocation();
  const classItem = location.state;

  const { id } = useParams();
  const handleCloseModal = () => {
    navigate('/admin/courses/decipline');
  };

  const navigate = useNavigate();
  const [classe_description, setClasse_description] = useState("");
  const [classe, setClasse] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const c = {
        titre: classe,
        classe_description: classe_description,
      }
      
      const newClasse = await updateClass(id,c);
      navigate("/admin/courses/decipline")
      Swal.fire(
        'Discipline Bien Edité!',
        'You clicked the button!',
        'success'
        )
        // Réinitialisez les champs du formulaire
      setClasse("");
      setClasse_description("");
      // Faites quelque chose avec la nouvelle discipline ajoutée, par exemple affichez un message de succès ou redirigez l'utilisateur vers une autre page
      console.log("Classe ajoutée :", newClasse);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la classe :", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      // Gérez les erreurs, par exemple affichez un message d'erreur à l'utilisateur
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              handleCloseModal();
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Editer Class</h1>
        </div>
        <div className="body_modal">
            <div className="form_group">
              <label htmlFor="classe" className="justify_start">
                Classe:
              </label>
              <input
                id="classe"
                type="text"
                placeholder="Classe"
                value={classItem.titre}
                onChange={(e) => setClasse(e.target.value)}
                className="input_modal"
              />
            </div>

            <div className="form_group">
                <label htmlFor="classe_description" className="justify_start">
                    Class Description:
                </label>
                <textarea
                    id="classe_description"
                    cols={5}
                    rows={8}
                    placeholder="Classe Description"
                    value={classItem.classe_description}
                    onChange={(e) => setClasse_description(e.target.value)}
                    className="input_modal_area"
                ></textarea>
            </div>

        </div>
        <div className="footer">
          <button
            className="btn btn_style"
            onClick={() => {
                handleCloseModal();
              }}
            id="cancelBtn"
            type="reset"
            >
            Cancel
          </button>
          
          <button type="submit" className="btn btn_style">Editer</button>
        </div>
      </div>
    </div>
            </form>
  );
}

export default EditClassForm;
