import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
function AddEmployee()
{
    // const name
    return(
        <div className="container">
            <p>Welome to react project</p>
            <div className="innercontainer">
                <Link to="/employeelist">EMPLOYEE LIST</Link>
            </div>
            <div className="addinput">
                <Routes>
                    <Route path="/employeelist" element={<App/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default AddEmployee