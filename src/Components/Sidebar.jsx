import React from 'react';

import { Outlet,Link,NavLink } from "react-router-dom";

// import { IoMdContact } from "react-icons/io";

const Sidebar = () => {
    return (
        <div>

<h1 className="text-2xl font-bold">My <span className='text-red-600'>Book</span> <br /> <span className="text-4xl">Shelf</span></h1>

<br />



             <ul className='grid grid-cols-1 gap-4'>
        <li>
          {/* <a href="/">Home</a> */}
          <NavLink to="/">Home</NavLink>

        </li>
        <li>
          {/* <a href="/about">About Us</a> */}
          <NavLink to="about">About Us</NavLink>
          </li>
          <li>
          {/* <a href="/contact">Contact Us</a> */}
          
          
          <NavLink  to="contact">contact Us</NavLink>

        </li>

        <li>
         
          <NavLink to="employees">Our Employee</NavLink>

        </li>
      </ul>
        </div>
    );
};

export default Sidebar;