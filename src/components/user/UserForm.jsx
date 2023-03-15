import React, { useEffect, useState } from "react";
import { crearuser, editUser } from "../../api/user.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";
const formSchema = Yup.object().shape({
  username: Yup.string().required("El username es requerido"),
  email: Yup.string()
    .required("El email es requerido")
    .email("Debe ser un correo electrónico válido"),

  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
const formOptions = { resolver: yupResolver(formSchema) };
export const UserForm = ({ userProp, titleButton, option }) => {
  const [user, setUser] = useState(userProp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setUser({ ...user, password: "" });
  }, []);

  const crud = async () => {
    let result;
    switch (option) {
      case 1:
        result = await crearuser(
          user.username,
          user.email,
          user.password,
          user.rol
        );
        if (result === true) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "usuario creado correctamente!",
            showConfirmButton: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
            } else {
            }
          });
        }
        break;
      case 2:
        console.log(user._id);
        result = await editUser(
          user._id,
          user.username,
          user.email,
          user.password,
          user.rol
        );
        if (result === true) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: `usuario actualizado correctamente!`,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            } else {
              window.location.href = "/";
            }
          });
        }
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(crud)}>
        <div className="form-group">
          <label className="text-black">Username</label>
          <input
            {...register("username")}
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={(e) =>
              setUser(() => ({ ...user, username: e.target.value }))
            }
          />
          {errors.username && (
            <span className="text-danger">{errors.username.message}</span>
          )}
        </div>
        <div className="form-group">
          <label className="text-black">Email address</label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser(() => ({ ...user, email: e.target.value }))
            }
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        {option == 1 && (
          <div className="form-group">
            <label className="text-black">Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="contra"
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser(() => ({ ...user, password: e.target.value }))
              }
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>
        )}
        <button type="submit" className="btn btn-success">
          {titleButton}
        </button>
      </form>
    </>
  );
};
