import React, { useState } from "react";

function ConsultationForm({ setOpenModal }) {
  const [discipline, setDiscipline] = useState("");
  const [classe, setClasse] = useState("");
  const [dateConsultation, setDateConsultation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire au serveur
    // en utilisant une API ou tout autre moyen approprié
    // Vous pouvez également effectuer des validations avant l'envoi des données

    // Réinitialiser les valeurs des champs après la soumission
    setDateConsultation("");
    setDiscipline("");
    setClasse("");
    setStartDate("");
    setEndDate("");
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h1>New Consultation</h1>
        </div>
        <div className="body_modal">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
            <label htmlFor="discipline">Discipline:</label>
              <select
              className="select_input"
                id="decipline"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              >
                <option value="">Sélectionnez une Discipline</option>
                <option value="Classe A">Classe A</option>
                <option value="Classe B">Classe B</option>
                <option value="Classe C">Classe C</option>
              </select>
            </div>
            <div className="form_group ">
              <label htmlFor="classe">Classe:</label>
              <select
              className="select_input"
                id="classe"
                value={classe}
                onChange={(e) => setClasse(e.target.value)}
              >
                <option value="">Sélectionnez une classe</option>
                <option value="Classe A">Classe A</option>
                <option value="Classe B">Classe B</option>
                <option value="Classe C">Classe C</option>
              </select>
            </div>
            <div className="form_group">
              <label htmlFor="date_consultation">Date de début:</label>
              <input
              className="input_modal"
                type="date"
                id="date_consultation"
                value={dateConsultation}
                onChange={(e) => setDateConsultation(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label htmlFor="startDate">Date de début:</label>
              <input
              className="input_modal"
                type="time"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label htmlFor="endDate">Date de fin:</label>
              <input
              className="input_modal"
              type="time"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </form>
        </div>
            <div className="footer">
              <button
                className="btn btn_style"
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button className="btn btn_style">Continue</button>
            </div>
      </div>
    </div>
  );
}

export default ConsultationForm;
