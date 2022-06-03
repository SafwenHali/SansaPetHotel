import React, { useState } from "react";
import { axiosInstance } from "../config";

const UsersList = ({ handleChange }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("clients")));

  const changeEdit = async (e) => {
    try {
      const res = await axiosInstance.get(
        "/api/v1/user/getUserById/" + e.target.name,
      );
      localStorage.setItem("editableUser", JSON.stringify(res.data.data));
      handleChange(7);
    } catch (err) {}
  };
  const handleDelete = async (e) => {
    try {
      const res = await axiosInstance.delete(
        "/api/v1/user/deleteUser/" + e.target.name,
      );
      let arrayList = data.filter((elem) => elem._id !== e.target.name);
      setData(arrayList);
    } catch (err) {}
  };
  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Clients Accounts List</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td>{d._id}</td>
                  <td>{d.fullName}</td>
                  <td>{d.email}</td>
                  <td>
                    <button
                      type='button'
                      class='btn btn-danger mx-2'
                      name={d._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type='button'
                      className='btn btn-success mx-2'
                      name={d._id}
                      onClick={changeEdit}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
