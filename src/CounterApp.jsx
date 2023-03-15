import { useEffect, useState } from "react";
import { deleteUser, listUsers } from "./api/user.api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";
import { UpdateUser } from "./components/user/UpdateUser";
import { User } from "./components/user/user.model";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const CounterApp = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(User);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = (u) => {
    setShowModal(true);
    setUser(u);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    reload();
  }, [showModal]);

  const reload = async () => {
    const result = await listUsers();
    setUsers(result);
  };

  const actualizar = (id) => {
    let result = deleteUser(id);
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

  const handleOnClick = () => {
    navigate("/profile", { state: { userProp: user } });
  };

  return (
    <>
      <h1>VENTA ONLINE</h1>
      <table className="table table-hover rounded table-responsive table-bordered ">
        <thead>
          <tr className="table-light">
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((x) => {
            return (
              <tr key={x._id}>
                <td key={x._id}>{x._id}</td>
                <td>{x.username}</td>
                <td>{x.email}</td>
                <td>{x.rol}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleOpenModal(x)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      actualizar(x._id);
                    }}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleOnClick();
                    }}
                  >
                    Ver
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
    </>
  );
};
