import React from 'react';

import image from '../../Asset/image/navebar/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="bg-current">

      <div class="navbar  bg-orange-600 " style={{ height: "15px" }}>
        <div class="navbar-start">
          <img src={image} alt="" className="w-20 ml-24" />
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p to="/">Home</p>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>

            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end navbar-center hidden lg:flex menu menu-horizontal p-0">
          <li>
            <a>Sign Up</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
