import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { Login } from "./login/components/Login";
import { isUserAuthenticated } from "./login/Helpers/LoginHelper";
import { NavBar } from "./NavBar";
import { CreateUser } from "./user/components/CreateUser";
import { ListUser } from "./user/components/ListUser";
import { ProfileUser } from "./user/components/ProfileUser";
export const AppRouter = () => {
  return (
    <>
      {isUserAuthenticated() ? (
        <div className="sidebar">
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <Link className="navbar-brand" to="/agregate">
            Agregar
          </Link>
          {/*<Link to="/agregate" className="nav-link active" aria-current="page">
            <PersonAddAltIcon
              fontSize="large"
              color="primary"
            ></PersonAddAltIcon>
          </Link>
      <a href="#">Contacto</a>*/}
        </div>
      ) : null}

      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            isUserAuthenticated() ? (
              <ListUser></ListUser>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/profile"
          element={
            isUserAuthenticated() ? <ProfileUser /> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/agregate"
          element={
            isUserAuthenticated() ? <CreateUser /> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/login"
          element={
            !isUserAuthenticated() ? <Login></Login> : <Navigate to="/" />
          }
        ></Route>
      </Routes>
    </>
  );
};
