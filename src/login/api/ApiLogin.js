import axios from "axios";
import Swal from "sweetalert2";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/login`, {
      email,
      password,
    });
    const token = response.data.token;
    // Guardar token en el almacenamiento local
    token ? localStorage.setItem("token", token) : null;

    return token;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `No se ha podido iniciar sesión`,
    });
  }
};
