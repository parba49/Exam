import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Employee =() =>{
    const {id} = useParams();

    const employeeDetails=useLoaderData();
    const navigate=useNavigate();

    

    return(
        <div>
           <h1>Name:{employeeDetails.name}</h1>
            <h1>Username:{employeeDetails.username}</h1>
            <h1>Phone:{employeeDetails.phone}</h1>

            <button onClick={()=>navigate(-1)}>Go back</button>
            
        </div>

    );

   

};

export default Employee