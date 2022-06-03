import React, { useState } from "react";
import { axiosInstance } from "../config";
import PrimaryBtn from "./PrimaryBtn";
const EditService = ({ handleNavigate }) => {
  const [data, setData] = useState({
    nom: JSON.parse(localStorage.getItem("editableService")).nom,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/v1/service/updateById/${
        JSON.parse(localStorage.getItem("editableService"))._id
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
        <h1 className='h2'>Edit Service</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name the Service</label>
        <input
          style={{ width: "60%" }}
          className='form-control mb-3 mt-1'
          type='text'
          name='nom'
          value={data.nom}
          onChange={handleChange}
        />
        <PrimaryBtn Value={"Edit"} Type={"submit"} />
      </form>
    </div>
  );
};

export default EditService;
