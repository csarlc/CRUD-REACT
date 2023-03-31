import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:3000/api/";

export const listUser = async () => {
  try {
    const {
      data: { users },
    } = await axios.get(`${URL}read-users`);
    console.log(users);
    return users;
  } catch ({ response: { data } }) {
    return data.message;
  }
};

export const CreateUser = async (username, email, password, rol) => {
  try {
    const userSave = await axios.post(
      `${URL}create-user`,
      {
        username: username,
        email: email,
        password: password,
        rol: rol,
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "el token ha expirado") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        } else {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
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

export const UpdateUser = async (id, username, email, password, rol) => {
  try {
    const { data } = await axios.put(
      `${URL}update-user/${id}`,
      {
        username,
        email,
        password,
        rol,
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    console.log(message.password.msg);
    if (message === "el token ha expirado") {
      localStorage.removeItem("token");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
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
        text: message.password.msg ? message.password.msg : message,
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

export const DeleteUSer = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}delete-user/${id}`, {
      headers: { "x-token": token },
    });
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "el token ha expirado") {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (message) {
      return message;
    }
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${URL}login`, {
      email,
      password,
    });
    const token = data.token;
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
