import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { axiosInstance } from "../config";
const ServiceForm = ({ handleNavigate }) => {
  const [data, setData] = useState({ nom: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/v1/service/create/`;
      const { data: res } = await axiosInstance.post(url, data);
      handleNavigate(1);
    } catch (err) {
      console.log("Error");
    }
  };
  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Create New Service</h1>
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
        <PrimaryBtn Value={"Create"} Type={"submit"} />
      </form>
    </div>
  );
};

export default ServiceForm;
