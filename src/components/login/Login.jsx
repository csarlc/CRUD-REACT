import { useState } from "react";
import Swal from "sweetalert2";
import { login } from "../../api/user.api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await login(email, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Ha iniciado sesión con exito!",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/";
        } else {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-black">
          Correo electrónico:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label text-black">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
    </form>
  );
};
