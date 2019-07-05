import React from "react";
import { NavLink } from "react-router-dom";

const SignedIn = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">
            <button className="btn btn-success btn-sm" type="submit">
              SignIn
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedIn;
