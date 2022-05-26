import React from "react";
import Navbar from "../Components/Navbar";
import Quotes from "../Components/Quotes";

const Home = () => {
  return (
    <div className='homeBackground'>
      <Navbar />
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-5 mt-5'>
            <h2 className='mb-3' style={{ color: "#b1dae7" }}>
              Sansa Pet Hotel and SPA
            </h2>
            <p
              style={{
                letterSpacing: "1px ",
                color: "black",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              The Barkley Pet Hotel & Day Spa family of animal care facilities
              provide resort-style vacations for dogs and cats (birds and
              exotics vary by location), by combining homelike amenities with
              recreational activity. Our state-of-the-art ‘five-paw’ properties
              are custom designed to meet and exceed all kennel industry
              standards for boarding, grooming, doggie day care and more. Our
              trained and caring staff members are the best in the business –
              providing unparalleled customer service, animal expertise and
              peace-of-mind 24-hours per day, 365 days per year. The end results
              are safer, more comfortable experiences at affordable prices!
            </p>
          </div>
          <div className='col-lg-6'>
            <Quotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
