import React from "react";
import { useNavigate } from "react-router-dom";
const FixedNavbarTop = () => {
  const Navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <nav class=' navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-1 shadow'>
      <a class='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
        Sansa Pet Hotel and SPA
      </a>
      <ul class='navbar-nav px-3'>
        <li class='nav-item'>
          <button className='btn btn-light' onClick={LogOut}>
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FixedNavbarTop;
