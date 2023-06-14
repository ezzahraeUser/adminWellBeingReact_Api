import React, { useState } from 'react';
import Agenda from './Agenda';
import ConsultationForm from './ConsultationForm.jsx';

const Consultation = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='justify_center'>
                <h1>Hey, click on the button to open the modal.</h1>
                <button className="btn openModalBtn" onClick={() => { setModalOpen(true) }}>New Consultation</button>
            </div>
            <div className='agenda'>
                <Agenda />
            </div>
                {modalOpen && <ConsultationForm setOpenModal={setModalOpen} />}
        </>
    );
}

export default Consultation;
