import React from "react";
import Navbar from "../Components/Navbar";
import SejourImg from "../Assets/Cat and dog-amico.svg";
const Sejour = () => {
  return (
    <div className='bookingBackground'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='bg-dark bg-opacity-25 mt-2 rounded-5'>
              <img src={SejourImg} alt='...' />
            </div>
          </div>
          <div className='col-lg-6 mt-5'>
            <h2 style={{ color: "#b1dae7" }}>
              LUXURY DOG AND CAT BOARDING SERVICES
            </h2>
            <h3
              style={{
                color: "#b1dae7",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              DOG BOARDING AT ITS FINEST
            </h3>
            <h5 style={{ letterSpacing: "1px", marginTop: "30px" }}>
              When you leave your dog or cat somewhere overnight, you want to be
              sure they’re well taken care of. Sansa Pet Hotel are
              award-winning, internationally recognized pet care resorts that
              will make your pup feel right at home. All our professionally
              trained and certified staff are true animal lovers and will care
              for your pet as if they were our own.
            </h5>
            <h5
              style={{
                letterSpacing: "1px",
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Choose from any of our luxury dog boarding options, each with a
              variety of premier accommodations:
            </h5>
            <ul>
              <li style={{ color: "#b1dae7", letterSpacing: "1px" }}>
                Traditional Dog and Cat Boarding
              </li>
              <li style={{ color: "#b1dae7", letterSpacing: "1px" }}>
                Executive Rooms
              </li>
              <li style={{ color: "#b1dae7", letterSpacing: "1px" }}>
                Luxury Dog and Cat Boarding Suites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejour;
