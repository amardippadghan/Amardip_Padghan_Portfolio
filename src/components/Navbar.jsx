import React from "react";
import img from "../image/amardip.png";

function Navbar() {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Amardip</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end"></div>

        {/* Additional tabs in the Navbar */}
        <div className="ml-4 space-x-4">
          <a className="btn btn-ghost">About Us</a>
          <a className="btn btn-ghost">Contact Me</a>
          <a className="btn btn-ghost">Projects</a>
          <a className="btn btn-ghost">Experience</a>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={img} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
