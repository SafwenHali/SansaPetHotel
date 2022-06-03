import React, { useState } from "react";
import { axiosInstance } from "../config";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
const EditReservation = ({ handleNavigate }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("editableRes")),
  );
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError("");
  };

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password != data.passwordConfirm) {
      setError("Confirm your password");
    }
    try {
      const url = `/api/v1/reservation/updateById/${data._id}`;
      const { data: res } = await axiosInstance.patch(url, data);
      console.log(data);
      handleNavigate(1);
    } catch (err) {
      console.log("Error");
    }
  };
  return (
    <div>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Edit Reservation</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div class='mb-3'>
          <label for='email' class='form-label'>
            Email address
          </label>
          <input
            style={{ width: "60%" }}
            type='email'
            class='form-control'
            name='email'
            value={data.email}
            onChange={handleChange}
            aria-describedby='emailHelp'
            placeholder='example@email.com'
          />
        </div>
        <div class='mb-3'>
          <label for='fullName' class='form-label'>
            Full Name
          </label>
          <input
            style={{ width: "60%" }}
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
            style={{ width: "60%" }}
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
            style={{ width: "60%" }}
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
            style={{ width: "60%" }}
            type='text'
            class='form-control'
            value={data.petName}
            onChange={handleChange}
            name='petName'
            placeholder='Ex: Mika, Anya...'
          />
        </div>
        <div className='d-flex '>
          <div class='mb-3' style={{ width: "30%" }}>
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
          <div class='mb-3' style={{ width: "30%" }}>
            <label for='petNumber' class='form-label'>
              Pet's Numbers
            </label>
            <input
              // style={{ width: "50%" }}
              type='number'
              class='form-control'
              value={data.petNumber}
              onChange={handleChange}
              name='petNumber'
              placeholder='Ex: 2'
            />
          </div>
        </div>
        <div className=''>
          <PrimaryBtn Value={"Edit Booking"} Type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default EditReservation;
