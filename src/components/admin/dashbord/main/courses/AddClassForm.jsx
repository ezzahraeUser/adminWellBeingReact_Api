import React, { useState } from "react";
import { addClass } from "../../../../../api/api__admin";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function AddClassForm({ setOpenModal }) {

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
      // Créez un objet contenant les données de la discipline
      const classeData = {
        titre: classe,
        discipline_description: classe_description,
      };

      // Appelez la fonction addDiscipline pour envoyer les données à l'API
      const c = {

        titre: classeData.titre.toString(),
        classe_description: classeData.discipline_description.toString(),
      }
      const newClasse = await addClass(id,c);
      navigate("/admin/courses/decipline")
      Swal.fire(
        'Classe Bien Ajouté!',
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
          <h1>Add Class</h1>
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
                value={classe}
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
                    value={classe_description}
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
          
          <button type="submit" className="btn btn_style">Add</button>
        </div>
      </div>
    </div>
            </form>
  );
}

export default AddClassForm;
