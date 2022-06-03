import React, { useState } from "react";
import { axiosInstance } from "../config";
const ReservsList = ({ handleChange }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("Reservs")));
  const changeEdit = async (e) => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/reservation/getById/${e.target.name}`,
      );
      localStorage.setItem("editableRes", JSON.stringify(res.data.data));
      handleChange(5);
    } catch (err) {}
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.delete(
        "/api/v1/reservation/deleteById/" + e.target.name,
      );
      let arrayList = data.filter((elem) => elem._id !== e.target.name);
      setData(arrayList);
    } catch (err) {}
  };
  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Reservation List</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pet(s) Number</th>
              <th>Pet(s) Breed</th>
              <th>Pet(s) Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td>{d._id}</td>
                  <td>{d.fullName}</td>
                  <td>{d.email}</td>
                  <td>{d.phoneNum}</td>
                  <td>{d.petNumber}</td>
                  <td>{d.petBreed}</td>
                  <td>{d.petName}</td>
                  <td>
                    <button
                      type='button'
                      class='btn btn-danger mx-2'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                      name={d._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type='button'
                      className='btn btn-success mx-2'
                      name={d._id}
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop'
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

export default ReservsList;
