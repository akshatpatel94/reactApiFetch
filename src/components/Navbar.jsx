import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_class">
      <Link to="/"> Home </Link> |<Link to="/user"> User </Link> |
      <Link to="/posts"> Posts </Link>
    </div>
  );
};
export default Navbar;
