import React, { useState } from "react";
import { axiosInstance } from "../config";
const ServicesList = ({ handleChange }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("services")),
  );

  const changeEdit = async (e) => {
    try {
      const res = await axiosInstance.get(
        "/api/v1/service/getById/" + e.target.name,
      );
      localStorage.setItem("editableService", JSON.stringify(res.data.data));
      handleChange(6);
    } catch (err) {}
  };

  const handleDelete = async (e) => {
    try {
      const res = await axiosInstance.delete(
        "/api/v1/service/deleteById/" + e.target.name,
      );
      let arrayList = data.filter((elem) => elem._id !== e.target.name);
      setData(arrayList);
    } catch (err) {}
  };
  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Services List</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td>{d._id}</td>
                  <td>{d.nom}</td>
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

export default ServicesList;
