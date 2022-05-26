import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../Components/PrimaryBtn";
import { useState } from "react";
import { axiosInstance } from "../config";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const Navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/v1/user/login";
      const res = await axiosInstance.post(url, data);
      localStorage.setItem("Role", res.data.role);
      localStorage.setItem("token", res.data.token);
      Navigate("/home");
      window.location.reload();
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setError("Verify your email and password");
      }
    }
  };

  return (
    <div className='OpeningBackground p-5'>
      <div className='col-5 rounded-4 mt-3 m-auto bg-light p-5 shadow '>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <h3 style={{ color: "#b1dae7" }}>Sansa Pet Hotel and SPA</h3>
            <h6 className='mt-2'>Reserve now!</h6>
          </div>
          <hr />
          <h3 className='mb-4 text-center'>Login with your account</h3>
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
              placeholder='password'
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
              <PrimaryBtn Type={"submit"} Value={"Login"} />
            </div>
            <Link
              to='/register'
              style={{
                color: "#b1dae7",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              New Here ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
