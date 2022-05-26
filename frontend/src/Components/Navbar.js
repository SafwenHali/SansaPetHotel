import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <nav class='navbar navbar-expand-lg bg-dark bg-opacity-50 navbar-dark'>
        <div class='container-fluid'>
          <a class='navbar-brand' style={{ color: "#b1dae7" }} href='#'>
            Sansa Pet Hotel and SPA
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link to='/home' class='nav-link' aria-current='page'>
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/services' class='nav-link'>
                  Services
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/sejour' class='nav-link'>
                  Sejour
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/booking' class='nav-link'>
                  Booking
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/subscription' class='nav-link'>
                  Subscription
                </Link>
              </li>
            </ul>
            <button className='btn btn-light' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
