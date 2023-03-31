//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { isUserAuthenticated } from "./login/Helpers/LoginHelper";

export const NavBar = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      {isUserAuthenticated() && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              CRUD
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/agregate"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Agregar Usuario
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {localStorage.getItem("token") && (
                  <li className=" nav-item navbar-item-right ms-auto float-right glyphicon glyphicon-log-out">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={() => cerrarSesion()}
                    >
                      {/*/<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />*/}
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
