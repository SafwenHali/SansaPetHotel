import React from "react";
import { axiosInstance } from "../config";

const Dashboard = ({ handleChange }) => {
  const customersList = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/user/getAllUsers");
      localStorage.setItem("clients", JSON.stringify(res.data.data));
      handleChange(2);
    } catch (err) {}
  };
  const servicesList = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/service/getAll");
      localStorage.setItem("services", JSON.stringify(res.data.data));
      handleChange(3);
    } catch (err) {}
  };
  const ReservationsList = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/reservation/getAll");
      localStorage.setItem("Reservs", JSON.stringify(res.data.data));
      handleChange(4);
    } catch (err) {}
  };
  return (
    <div className='container'>
      <div className='row'>
        <div
          onClick={servicesList}
          className='hover_click col-lg-12 text-center px-5 rounded-5 py-5 mt-2'
          style={{ fontSize: "40px" }}
        >
          Services
        </div>
        <div
          onClick={customersList}
          className='hover_click col-lg-12 text-center px-5 rounded-5 py-5 mt-2'
          style={{ fontSize: "40px" }}
        >
          Client
        </div>
        <div
          onClick={ReservationsList}
          className='hover_click col-lg-12 text-center px-5 rounded-5 py-5 mt-2'
          style={{ fontSize: "40px" }}
        >
          Reservations
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
