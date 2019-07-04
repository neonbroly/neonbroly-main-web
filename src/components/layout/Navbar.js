import React from "react";
import { Link } from "react-router-dom";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow
          p-3 mb-5 rounded-bottom"
      >
        <div>
          <Link to="/" className="navbar-brand mb-0 pull-left">
            Navbar
          </Link>
        </div>

        <div className="pull-right">
          <SignedIn />
        </div>

        <div className="pull-right">
          <SignedOut />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
