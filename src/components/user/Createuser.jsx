import React, { useState } from "react";
import { User } from "./user.model";
import { UserForm } from "./UserForm";
export const Createuser = () => {
  const [user, setUser] = useState(User);

  return (
    <>
      <UserForm
        userProp={user}
        titleButton="Crear Usuario"
        option={1}
      ></UserForm>
    </>
  );
};
