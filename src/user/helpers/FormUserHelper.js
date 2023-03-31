import { CreateUser, UpdateUser } from "../api/ApiUser";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  username: Yup.string().required("El nombre de usuario es requerido"),
  email: Yup.string()
    .required("El correo electrónico es requerido")
    .email("Debe ser un correo electrónico válido"),

  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (user, option) => {
  let resultado;
  switch (option) {
    case 1:
      console.log("hola");
      resultado = await CreateUser(
        user.username,
        user.email,
        user.password,
        user.rol
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "usuario creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      console.log(user._id);
      resultado = await UpdateUser(
        user._id,
        user.username,
        user.email,
        user.password,
        user.rol
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `usuario actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
          } else {
          }
        });
      }
      break;
  }
};
