import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../Constants/Url";
import Read_1 from "./Read_1old";
import { useNavigate } from "react-router-dom";

function Update_1() {
  const [names, setnames] = useState("");
  const [Experiences, setExperiences] = useState("");
  const [dojs, setDoJs] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(localStorage.getItem('id'))
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('Experience'))
    // console.log(localStorage.getItem('doj'))

    //getting the stored values
    setId(localStorage.getItem("id"));
    setnames(localStorage.getItem("names"));
    setExperiences(localStorage.getItem("Experiences"));
    setDoJs(localStorage.getItem("dojs"));
  }, []);

  const handleSubmit1 = async () => {
    //put method is used for updating
    await axios.put(`${API_URL}/${id}`, { names, Experiences, dojs });

    //after the updating the values, it navigate to the read page
    navigate("/read");
  };

  return (
    <div>
      {/* update form */}
      <input
        type="text"
        placeholder="Enetr Name"
        value={names}
        onChange={(event) => setnames(event.target.value)}
      ></input>
      <br></br>

      <input
        type="text"
        placeholder="Experience in years"
        value={Experiences}
        onChange={(event) => setExperiences(event.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Enter the Date of Joining"
        value={dojs}
        onChange={(event) => setDoJs(event.target.value)}
      ></input>
      <br></br>
      <button type="button" onClick={handleSubmit1} className="updatebutton">
        Update
      </button>
    </div>
  );
}

export default Update_1;
