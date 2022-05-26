import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SecondaryBtn from "../Components/SecondaryBtn";
import { axiosInstance } from "../config";
const Booking = () => {
  const [data, setData] = useState({
    email: "",
    fullName: "",
    petBreed: "",
    phoneNum: "",
    availableTime: "",
    service: "",
    petName: "",
    petNumber: null,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/api/v1/reservation/addReservation",
        data,
      );
      if (res.data.status === "success") {
        Navigate("/success");
      }
    } catch (error) {}
  };
  return (
    <div className='bookingBackground'>
      <Navbar />
      <div className='d-flex justify-content-center mt-4'>
        <div className='col-lg-5 col-sm-11 bg-dark bg-opacity-25 px-5 py-4 rounded-5 shadow customColor mb-5'>
          <form onSubmit={handleSubmit}>
            <div class='mb-3'>
              <label for='email' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                name='email'
                value={data.email}
                onChange={handleChange}
                aria-describedby='emailHelp'
                placeholder='example@email.com'
              />
              <label name='emailHelp' class='form-text'>
                We'll never share your email with anyone else.
              </label>
            </div>
            <div class='mb-3'>
              <label for='fullName' class='form-label'>
                Full Name
              </label>
              <input
                type='text'
                class='form-control'
                value={data.fullName}
                onChange={handleChange}
                name='fullName'
                placeholder='Foulen Ben Foulen'
              />
            </div>
            <div class='mb-3'>
              <label for='phoneNum' class='form-label'>
                Phone Number
              </label>
              <input
                type='number'
                class='form-control'
                value={data.phoneNum}
                onChange={handleChange}
                name='phoneNum'
                placeholder='+216........'
              />
            </div>
            <div class='mb-3'>
              <label for='availableTime' class='form-label'>
                Available Time
              </label>
              <input
                type='text'
                class='form-control'
                value={data.availableTime}
                onChange={handleChange}
                name='availableTime'
                placeholder='12:00 - 14:00'
              />
            </div>
            <div class='mb-3'>
              <label for='petName' class='form-label'>
                Pet's Name(s)
              </label>
              <input
                type='text'
                class='form-control'
                value={data.petName}
                onChange={handleChange}
                name='petName'
                placeholder='Ex: Mika, Anya...'
              />
            </div>
            <div class='mb-3'>
              <label for='petName' class='form-label'>
                Pet's Breed
              </label>
              <input
                type='text'
                class='form-control'
                value={data.petBreed}
                onChange={handleChange}
                name='petBreed'
                placeholder='Ex: Cat, Dog...'
              />
            </div>
            <div class='mb-3'>
              <label for='petNumber' class='form-label'>
                Pet's Numbers
              </label>
              <input
                type='number'
                class='form-control'
                value={data.petNumber}
                onChange={handleChange}
                name='petNumber'
                placeholder='Ex: 2'
              />
            </div>
            <div class='mb-3 d-flex justify-content-evenly'>
              <label style={{ fontWeight: "600" }} class='form-label'>
                Service:
              </label>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value={"Grooming"}
                  onClick={handleChange}
                  name='service'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Grooming
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value={"Walking"}
                  onClick={handleChange}
                  name='service'
                  id='flexCheckDefault'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Walking
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value={"Training"}
                  onClick={handleChange}
                  name='service'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Training
                </label>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <SecondaryBtn Value={"Submit Booking"} Type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
