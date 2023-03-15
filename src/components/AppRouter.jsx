import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { CounterApp } from "../CounterApp";
import { isUserAuthenticated } from "./login/isAuthenticated";
import { Login } from "./login/Login";
import { Createuser } from "./user/Createuser";
import { UserProfile } from "./user/UserProfile";
export const AppRouter = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      {isUserAuthenticated() && (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-end">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/agregar">
                    Agregar
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {localStorage.getItem("token") && (
                  <li className="nav-item navbar-item-right ms-auto float-right glyphicon glyphicon-log-out">
                    <Link
                      className="nav-link "
                      to="/login"
                      onClick={() => cerrarSesion()}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={
            isUserAuthenticated() ? <CounterApp /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/agregar"
          element={
            isUserAuthenticated() ? (
              <Createuser></Createuser>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/profile"
          element={
            isUserAuthenticated() ? (
              <UserProfile></UserProfile>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </>
  );
};
