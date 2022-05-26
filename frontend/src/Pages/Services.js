import React from "react";
import Navbar from "../Components/Navbar";
import Walking from "../Assets/Dog walking-amico.svg";
import Training from "../Assets/Good doggy-amico.svg";
import Grooming from "../Assets/Veterinary-amico.svg";
import PrimaryBtn from "../Components/PrimaryBtn";
import SecondaryBtn from "../Components/SecondaryBtn";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/booking");
  };

  const handleJoinUs = () => {
    Navigate("/register");
  };
  return (
    <div className='homeBackground'>
      <Navbar />
      <div className='container'>
        <div className='row d-flex justify-content-between mt-5'>
          <div className='col-lg-4'>
            <div
              className=' bg-dark bg-opacity-50 rounded-5 shadow'
              style={{ width: "95%" }}
            >
              <img src={Grooming} alt='...' />
              <h3 className='text-center py-3' style={{ color: "#b1dae7" }}>
                Grooming
              </h3>
              <div className='d-flex justify-content-center pb-3'>
                <SecondaryBtn
                  Value={"Register"}
                  Type={"button"}
                  Fn={handleNavigate}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-4 '>
            <div
              className=' bg-dark bg-opacity-50 rounded-5 shadow'
              style={{ width: "95%" }}
            >
              <img src={Walking} alt='...' />
              <h3 className='text-center py-3' style={{ color: "#b1dae7" }}>
                Walking
              </h3>
              <div className='d-flex justify-content-center pb-3'>
                <SecondaryBtn
                  Value={"Register"}
                  Type={"button"}
                  Fn={handleNavigate}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div
              className='bg-dark bg-opacity-50 rounded-5 shadow'
              style={{ width: "95%" }}
            >
              <img src={Training} alt='...' />
              <h3
                className='text-center py-3'
                style={{ color: "#b1dae7" }}
                Fn={handleNavigate}
              >
                Training
              </h3>
              <div className='d-flex justify-content-center pb-3'>
                <SecondaryBtn Value={"Register"} Type={"button"} Fn={handleNavigate}/>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center py-5'>
          <PrimaryBtn Value={"Join us Now !"} Fn={handleJoinUs} />
        </div>
      </div>
    </div>
  );
};

export default Services;
