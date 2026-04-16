import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/stats">Stats</Link>
    </div>
  );
};

export default Navbar;
