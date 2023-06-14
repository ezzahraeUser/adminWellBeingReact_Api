import React, { useState } from "react";
import { addDiscipline } from "../../../../../api/api__admin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function DeciplineForm({ setOpenModal }) {

  const handleCloseModal = () => {
    navigate('/admin/courses/decipline');
  };

  const navigate = useNavigate();
  const [discipline, setDiscipline] = useState("");
  const [discipline_description, setDiscipline_description] = useState("");
  const [background_img, setBackground_img] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Créez un objet contenant les données de la discipline
      const disciplineData = {
        titre: discipline,
        discipline_description: discipline_description,
        background_img: background_img,
      };

      // Appelez la fonction addDiscipline pour envoyer les données à l'API
      console.log(disciplineData.background_img)
      const d = {

        titre:disciplineData.titre.toString(),
        discipline_description:disciplineData.discipline_description.toString(),
        background_img:disciplineData.background_img
      }
      const newDiscipline = await addDiscipline(d);
      navigate("/admin/courses/decipline")
      Swal.fire(
        'Discipline Bien Ajoutée!',
        'You clicked the button!',
        'success'
        )
        // Réinitialisez les champs du formulaire
      setDiscipline("");
      setDiscipline_description("");
      setBackground_img("");
      // Faites quelque chose avec la nouvelle discipline ajoutée, par exemple affichez un message de succès ou redirigez l'utilisateur vers une autre page
      console.log("Discipline ajoutée :", newDiscipline);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la discipline :", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      // Gérez les erreurs, par exemple affichez un message d'erreur à l'utilisateur
    }
  };

  


  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    setBackground_img(file);
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              handleCloseModal();
            }} type="button"
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>New Discipline</h1>
        </div>
        <div className="body_modal">
            <div className="form_group">
              <label htmlFor="discipline" className="justify_start">
                Discipline:
              </label>
              <input
                id="discipline"
                type="text"
                placeholder="Discipline"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                className="input_modal"
              />
            </div>

            <div className="form_group">
                <label htmlFor="discipline_description" className="justify_start">
                    Discipline Description:
                </label>
                <textarea
                    id="discipline_description"
                    cols={5}
                    rows={8}
                    placeholder="Discipline Description"
                    value={discipline_description}
                    onChange={(e) => setDiscipline_description(e.target.value)}
                    className="input_modal_area"
                ></textarea>
            </div>


            <div className="form_group">
              <label htmlFor="background_img" className="justify_start">
                Background Image:
              </label>
              <input
                id="background_img"
                type="file"
                accept="image/*"
                className=" input_modal_file"

                onChange={handleBackgroundChange}
              />
            </div>
        </div>
        <div className="footer">
          <button
            className="btn btn_style"
            onClick={() => {
              handleCloseModal();
            }}
            id="cancelBtn"
            >
            Cancel
          </button>
          
          <button type="submit" className="btn btn_style">Continue</button>
        </div>
      </div>
    </div>
            </form>
  );
}

export default DeciplineForm;
