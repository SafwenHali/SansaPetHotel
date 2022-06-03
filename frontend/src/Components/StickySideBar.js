import React from "react";
import { axiosInstance } from "../config";
const StickySideBar = ({ handleChange }) => {
  const dashBoard = () => {
    handleChange(1);
  };
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
  const createService = () => {
    handleChange(8);
  };
  return (
    <div className='sidebar-sticky mt-5'>
      <ul className='nav flex-column '>
        <li
          className='nav-item mb-2 mt-3'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={dashBoard}
          >
            Dashboard
          </a>
        </li>
        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={customersList}
          >
            Customers
          </a>
        </li>
        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={servicesList}
          >
            Services
          </a>
        </li>
        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={createService}
          >
            Create Service
          </a>
        </li>
        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={ReservationsList}
          >
            Reservations
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickySideBar;
