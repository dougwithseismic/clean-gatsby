import React, { useContext, Fragment } from 'react'
import ModalContext from '../../../context/ModalContext'
import './style.css'

// If modalContext.isModalOpen == true, we'll show the modal and render any children attached.
// THIS IS ONLY A WRAPPER. You'll need to define your content as a child (so we can use this as generic modal behaviour across entire site)
// Usage - <Modal>Add Content Here </Modal>

const Modal = (props) => {
  const modalContext = useContext(ModalContext)
  return (
    <Fragment>
      {modalContext.isModalOpen ? (
        <div className="modal-container">
          <div className="modal-bg" onClick={() => modalContext.toggleModal()} />
          <div className="modal-open">
            {props.children}
            <div className="modal-cross" onClick={() => modalContext.toggleModal()}>
              ✖
            </div>
          </div>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  )
}

export default Modal
