import React from "react";
import { NavLink } from "react-router-dom";

const SignedOut = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <button class="btn btn-danger btn-sm" type="submit">
              SignOut
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOut;
