import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "../models/ModelUser";
export const ProfileUser = () => {
  //const [user2, setUser2] = useState(new User());
  const {
    state: { user },
  } = useLocation();
  //console.log(user2);
  return (
    <>
      <div
        style={{ paddingTop: "4%" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <div className="card">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src="https://i.imgur.com/JgYD2nQ.jpg"
                className="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h4 className="mb-0">{user.username}</h4>
            <span className="text-muted d-block mb-2">{user.email}</span>

            <button
              className="btn btn-primary btn-sm follow"
              onClick={() => (window.location.href = "/")}
            >
              Return
            </button>

            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">Followers</h6>
                <span>8,797</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Projects</h6>
                <span>142</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Ranks</h6>
                <span>129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
