import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { User } from "./user.model";
import { crearuser } from "../../api/user.api";
import { UserForm } from "./UserForm";

export const UpdateUser = ({ isOpen, onClose, userEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title className="text-dark">ID: {userEdit._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            userProp={userEdit}
            titleButton="Actualizar"
            option={2}
          ></UserForm>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={onClose}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
