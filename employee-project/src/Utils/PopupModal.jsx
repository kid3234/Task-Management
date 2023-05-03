import React, { useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')
function PopupModal(props) {
   
  return (
   
    <Modal isOpen={props.show} onRerustClose={props.onClose} className="main-modal">
      
             <div className='modal-component'>
                  {props.children}
              </div>
    </Modal>
   
  )
}

export default PopupModal