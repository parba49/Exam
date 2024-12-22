import React,{useEffect,useState} from "react";
import { useLoaderData,Link, useNavigate } from "react-router-dom";
import './Employees.css'



const Employees =() =>{

    const employees=useLoaderData();

    const navigate=useNavigate();



    return(
        <div>

    


            <h1>Nice employee</h1>
            <h2>Total Employees: {employees.length}</h2>

           <div className="employee-container">
           {
                employees.map((employee) =>{
                    return(
                        <div className="employee" key={employee.id}>
                            <h2>Name:{employee.name}</h2>
                            <p>Email:{employee.email}</p>
                            {/* {

                            <Link to={`${employee.id}`}>
                            <button>show detail</button>
                           
                            </Link>
                            } */}

                        <button onClick={()=>navigate("/employees/"+employee.id)} >Show details</button>


                        
                      </div>

                    );

                })
            }

           </div>


        </div>
    );

};

export default Employees