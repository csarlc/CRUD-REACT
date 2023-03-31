import React from "react";
import { FormUser } from "./FormUser";
import { User } from "../models/ModelUser";

export const CreateUser = () => {
  return (
    <>
      <FormUser
        userProp={User}
        titleButton="Crear Usuario"
        option={1}
      ></FormUser>
    </>
  );
};
