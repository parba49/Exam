
import './App.css'

import { Outlet,Link,NavLink } from "react-router-dom";

import { IoMdContact } from "react-icons/io";

function App() {
 

  return (
    <>
      <header>
      <h1>hello</h1>
     
      <ul>
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
          
          <NavLink to="contact"><IoMdContact fontSize={"15px"} />contact Us</NavLink>

        </li>

        <li>
         
          <NavLink to="employees">Our Employee</NavLink>

        </li>
      </ul>
      </header>

      <Outlet></Outlet>

      <footer>All rigts reserved</footer>

      
    </>
  )
}

export default App
