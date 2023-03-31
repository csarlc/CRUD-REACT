import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./login/components/Login";
import { isUserAuthenticated } from "./login/Helpers/LoginHelper";
import { NavBar } from "./NavBar";
import { CreateUser } from "./user/components/CreateUser";
import { ListUser } from "./user/components/ListUser";
import { ProfileUser } from "./user/components/ProfileUser";

export const AppRouter = () => {
  return (
    <>
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
