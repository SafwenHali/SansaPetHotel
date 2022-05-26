import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../Components/PrimaryBtn";
import { useState } from "react";
import { axiosInstance } from "../config";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    fullName: "",
  });
  const [error, setError] = useState("");

  const Navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password != data.passwordConfirm) {
      setError("Confirm your password");
    }
    try {
      const url = "/api/v1/user/register";
      const { data: res } = await axiosInstance.post(url, data);
      Navigate("/login");
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className='OpeningBackground p-5'>
      <div className='col-5 rounded-4 mt-3 m-auto bg-light p-5 shadow '>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <h3 style={{ color: "#b1dae7" }}>Sansa Pet Hotel and SPA</h3>
            <h6 className='mt-2'>Register now!</h6>
          </div>
          <hr />
          <h3 className='mb-4 text-center'>Register your account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div class='mb-3'>
            <label for='email' class='form-label'>
              Email address
            </label>
            <input
              type='email'
              class='form-control'
              value={data.email}
              onChange={handleChange}
              required
              name='email'
              placeholder='name@example.com'
            />
          </div>
          <div class='mb-3'>
            <label for='password' class='form-label'>
              Password
            </label>
            <input
              type='password'
              class='form-control'
              name='password'
              value={data.password}
              onChange={handleChange}
              required
              placeholder='Password'
            />
          </div>
          <div class='mb-3'>
            <label for='password' class='form-label'>
              Confirm Password
            </label>
            <input
              type='password'
              class='form-control'
              name='passwordConfirm'
              value={data.passwordConfirm}
              onChange={handleChange}
              required
              placeholder='Confirm your Password'
            />
          </div>
          <div class='mb-3'>
            <label for='password' class='form-label'>
              Full Name
            </label>
            <input
              type='text'
              class='form-control'
              name='fullName'
              value={data.fullName}
              onChange={handleChange}
              required
              placeholder='Foulen Ben Foulen'
            />
          </div>
          {error && (
            <div className='d-flex justify-content-center'>
              <div
                className='bg-danger p-2 rounded-3 w-75 text-center text-muted mb-3'
                style={{ fontSize: "16px", fontWeight: "600" }}
              >
                {error}
              </div>
            </div>
          )}
          <div className='d-flex justify-content-between'>
            <div>
              <PrimaryBtn Type={"submit"} Value={"Register"} />
            </div>
            <Link
              to='/login'
              style={{
                color: "#b1dae7",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              Already a member?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
