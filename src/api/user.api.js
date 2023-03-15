import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
export const crearuser = async (username, email, password, rol) => {
  try {
    const userSave = await axios.post(
      "http://localhost:3000/api/create-user",
      {
        username: username,
        email: email,
        password: password,
        rol: rol,
      },
      { headers: { "x-token": token } }
    );
    console.log(userSave.data.user);
    return true;
  } catch ({ response: { data } }) {
    console.log(JSON.stringify(data.message));
    let x = JSON.stringify(data.message);
    console.log(x);
    if (data.message === "el token ha expirado") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          console.log("haol");
        } else {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
        } else {
        }
      });
    }
  }
};

export const listUsers = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/read-users");
    console.log(data.users);
    return data.users;
  } catch (error) {
    if (response.data.message) {
      return response.data.message;
    }
  }
};

export const editUser = async (id, username, email, password, rol) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3000/api/update-user/${id}`,
      {
        username,
        email,
        password,
        rol,
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({ response }) {
    if (response.data.message === "el token ha expirado") {
      localStorage.removeItem("token");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        } else if (result.isDenied) {
          window.location.href = "/login";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
        } else {
        }
      });
    }
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:3000/api/delete-user/${id}`,
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({ response }) {
    if (response.data.message === "el token ha expirado") {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (response.data.message) {
      return response.data.message;
    }
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
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
