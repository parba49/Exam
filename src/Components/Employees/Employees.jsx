import React,{useEffect,useState} from "react";
import { useLoaderData,Link, useNavigate } from "react-router-dom";
import './Employees.css'

import { LineChart, Line } from 'recharts';

const Employees =() =>{

    const employees=useLoaderData();

    const navigate=useNavigate();

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2000},
        {name: 'Page B', uv: 500, pv: 1000, amt: 1800},
        {name: 'Page C', uv: 200, pv: 1500, amt: 1500},
        {name: 'Page D', uv: 600, pv: 500, amt: 1700},

    ];


    return(
        <div>

     const renderLineChart = (
          <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
       );


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