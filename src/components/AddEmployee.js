import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
import AddNew from "./AddNew";
function AddEmployee()
{
    // const name
    return(
        <div className="container">
            <p>Welome to the react project</p>
            <div className="innercontainer">
                
                <Link to="/employeelist">EMPLOYEE LIST</Link><br></br><br></br>
                <Link to="/addnew">ADD NEW EMPLOYEE </Link>
            </div>
            <div className="addinput">
                <Routes>
                    <Route path="/employeelist" element={<App/>}/>
                    <Route path="/addnew" element={<AddNew/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default AddEmployee