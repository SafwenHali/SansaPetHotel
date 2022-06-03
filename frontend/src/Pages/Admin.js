import React from "react";
import { useState } from "react";
import StickySideBar from "../Components/StickySideBar";
import Dashboard from "../Components/Dashboard";
import UsersList from "../Components/UsersList";
import ServicesList from "../Components/ServicesList";
import ReservsList from "../Components/ReservsList";
import FixedNavbarTop from "../Components/FixedNavbarTop";
import EditReservation from "../Components/EditReservation";
import EditService from "../Components/EditService";
import EditUser from "../Components/EditUser";
import ServiceForm from "../Components/ServiceForm";

const Admin = () => {
  const [page, setPage] = useState(1);
  const ChangePage = (NavPage) => {
    setPage(NavPage);
  };
  console.log(page);
  return (
    <div>
      <FixedNavbarTop />
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-dark vh-100 text-light '>
            <StickySideBar handleChange={ChangePage} />
          </nav>
          <div className='col-md-9 ml-sm-auto col-lg-10 px-4 mt-5 bg-light text-dark'>
            {page === 1 && <Dashboard handleChange={ChangePage} />}
            {page === 2 && <UsersList handleChange={ChangePage} />}
            {page === 3 && <ServicesList handleChange={ChangePage} />}
            {page === 4 && <ReservsList handleChange={ChangePage} />}
            {page === 5 && <EditReservation handleNavigate={ChangePage} />}
            {page === 6 && <EditService handleNavigate={ChangePage} />}
            {page === 7 && <EditUser handleNavigate={ChangePage} />}
            {page === 8 && <ServiceForm handleNavigate={ChangePage} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
