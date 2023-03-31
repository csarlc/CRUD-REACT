import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteUSer, listUser } from "../api/ApiUser";
import { User } from "../models/ModelUser";
import { UpdateUser } from "./UpdateUser";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";

export const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(User);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const reload = async () => {
    const result = await listUser();
    setUsers(result);
  };

  const handleOpenModal = (u) => {
    setShowModal(true);
    setUser(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const profile = (user) => {
    navigate("/profile", { state: { user } });
  };

  useEffect(() => {
    reload();
  }, [showModal]);

  const eliminar = async (id) => {
    let result = await DeleteUSer(id);
    if (result) {
      setUsers(users.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el usuario correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el usuario!",
      });
    }
  };

  return (
    <>
      <h1>Lista de Usuarios</h1>
      <div>
        <table className="table table-hover rounded table-responsive table-bordered">
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Nombre de Usuario</th>
              <th>Correo Electrónico</th>
              <th>ROL</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u._id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.rol}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(u)}
                    >
                      <EditIcon></EditIcon>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        profile(u);
                      }}
                    >
                      <VisibilityIcon></VisibilityIcon>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateUser
          userEdit={user}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateUser>
      </div>
    </>
  );
};
