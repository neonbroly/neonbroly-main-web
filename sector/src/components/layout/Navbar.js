import React from "react";
import { Link } from "react-router-dom";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-2">
      <div className="container">
        <Link
          to="/"
          className="brand-logo left"
          style={{ fontWeight: "100", paddingRight: 24, paddingLeft: 24 }}
        >
          SECTOR
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
};
export default Navbar;
