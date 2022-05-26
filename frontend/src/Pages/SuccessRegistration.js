import React from "react";
import Success from "../Assets/Cat rising from a pumpkin-amico.svg";
import Navbar from "../Components/Navbar";
const SuccessRegistration = () => {
  return (
    <div className='bookingBackground'>
      <Navbar />
      <div className='d-flex justify-content-center mt-4'>
        <div className='col-lg-5 col-sm-11 bg-dark bg-opacity-25 px-5 py-4 rounded-5 shadow customColor mb-5'>
          <img src={Success} alt='...' />
          <label
            style={{
              fontSize: "20px",
              letterSpacing: "1px",
              fontWeight: "600",
            }}
            className='mt-3'
          >
            Your pet thanks you for Successfuly Booking / Subscribing a service
            for it, we will contact your shortly with the data you submitted
            stay tunned.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SuccessRegistration;
