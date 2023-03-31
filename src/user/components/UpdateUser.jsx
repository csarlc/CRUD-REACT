import React from "react";
import { Modal } from "react-bootstrap";
import { FormUser } from "./FormUser";
export const UpdateUser = ({ isOpen, onClose, userEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {userEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUser
              userProp={userEdit}
              titleButton="Actualizar"
              option={2}
            ></FormUser>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
