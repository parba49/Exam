import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Employees from './Components/Employees/Employees.jsx';
import Employee from './Components/Employee/Employee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/about",
        element: <h1>About Us</h1>,
      },
    
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
      {
        path: "/employees",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Employees></Employees>,
      },

      {
        path: "/employees/:id",
        loader:({params})=>fetch("https://jsonplaceholder.typicode.com/users/"+params.id),
        element: <Employee></Employee>,
      },
    ]
  },

 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
