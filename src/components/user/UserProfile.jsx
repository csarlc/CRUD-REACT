import React, { useState } from "react";
import "../../css/profile.css";

export const UserProfile = ({ userProp }) => {
  const [user, setUser] = useState(userProp);
  console.log(user);
  return (
    <>
      <div className="student-profile py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img
                    className="profile_img"
                    src="https://source.unsplash.com/600x300/?student"
                    alt="student dp"
                  />
                  <h3>Ishmam Ahasan Samin</h3>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <strong className="pr-1">Student ID:</strong>
                    {user._id}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">ClassName:</strong>4
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Section:</strong>A
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>General Information
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th width="30%">Roll</th>
                        <td width="2%">:</td>
                        <td>125</td>
                      </tr>
                      <tr>
                        <th width="30%">Academic Year </th>
                        <td width="2%">:</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <th width="30%">Gender</th>
                        <td width="2%">:</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th width="30%">Religion</th>
                        <td width="2%">:</td>
                        <td>Group</td>
                      </tr>
                      <tr>
                        <th width="30%">blood</th>
                        <td width="2%">:</td>
                        <td>B+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="divertido">
                <div className="card shadow-sm">
                  <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">
                      <i className="far fa-clone text-black"></i>Other
                      Information
                    </h3>
                  </div>
                  <div className="card-body pt-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
