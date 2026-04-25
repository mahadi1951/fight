import React from "react";
import { NavLink } from "react-router-dom";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/about-us">About Us</MyLink>
      </li>
      <li>
        <MyLink to="/profile">Profile</MyLink>
      </li>
      <li>
        <MyLink to="/signin">Sign in</MyLink>
      </li>
      <li>
        <MyLink to="/signup">Sign up</MyLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex justify-between items-center">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? "active" : "btn btn-primary"
            }
          >
            Sign In
          </NavLink>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
