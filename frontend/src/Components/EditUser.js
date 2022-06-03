import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { axiosInstance } from "../config";
const EditUser = ({ handleNavigate }) => {
  const [data, setData] = useState({
    email: JSON.parse(localStorage.getItem("editableUser")).email,
    fullName: JSON.parse(localStorage.getItem("editableUser")).fullName,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/v1/user/updateUser/${
        JSON.parse(localStorage.getItem("editableUser"))._id
      }`;
      const { data: res } = await axiosInstance.patch(url, data);
      handleNavigate(1);
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Edit Accounts List</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div class='mb-3'>
            <label for='email' class='form-label'>
              Email address
            </label>
            <input
              style={{ width: "60%" }}
              type='email'
              class='form-control'
              value={data.email}
              onChange={handleChange}
              name='email'
              placeholder='name@example.com'
            />
          </div>
          <div class='mb-3'>
            <label for='password' class='form-label'>
              Full Name
            </label>
            <input
              style={{ width: "60%" }}
              type='text'
              class='form-control'
              name='fullName'
              value={data.fullName}
              onChange={handleChange}
              placeholder='Foulen Ben Foulen'
            />
          </div>
          <div className='d-flex justify-content-between'>
            <div>
              <PrimaryBtn Type={"submit"} Value={"Edit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
