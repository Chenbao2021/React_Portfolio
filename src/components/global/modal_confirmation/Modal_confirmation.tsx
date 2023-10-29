import React from 'react';
import Modal from 'react-modal';
import {GiConfirmed, GiCancel} from 'react-icons/gi'


import "./Modal_confirmation.css"

interface Modal_confirmationProps {
    click: boolean,
    link: string,
    closeModal: () => void,
}


function Modal_confirmation(props:Modal_confirmationProps) {
  return (
    <Modal
      isOpen={props.click}
      className="confirmation-box"
    >
      <div className="confirmation-head-box">
        <p>Confirmez vous de consulter les détails de ce projet via google doc?</p>
      </div>
      <div className="confirmation-buttons-box">
          <a >
            <GiCancel size={'50%'} color='red' onClick={props.closeModal}/>

          </a>
          <a href={props.link} onClick={props.closeModal}>
            <GiConfirmed size={'50%'}/>
          </a>
      </div>
    </Modal>
  )
}

export default Modal_confirmation