
import './App.css'

import { Outlet,Link,NavLink } from "react-router-dom";

import { IoMdContact } from "react-icons/io";

import Navbar from './Components/Navbar.jsx';

import Sidebar from './Components/Sidebar.jsx';

function App() {
 

  return (
    <>

   
    
      <header className=' grid grid-cols-9 '>


      <Sidebar className="row-span-1"></Sidebar>

      <Navbar></Navbar>

      
      
     
     
      </header>

      <Outlet></Outlet>

      <footer>All rigts reserved</footer>

      
    </>
  )
}

export default App
